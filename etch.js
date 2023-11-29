let mouseDown = false;
document.body.onmousedown = function() { 
    mouseDown = true;
}
document.body.onmouseup = function() {
    mouseDown = false;
}

let gridOn = true;
let canClear = false;

let button = document.querySelector("#RESIZE");

button.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size [0-128]");
    if (newSize == null)
        return;

    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize > 128 || newSize < 0) {
        alert("Invalid input. Please enter an integer number [0-128]");
    }
    else {
        createGrid(newSize);
    }
});

let gridButton = document.querySelector("#GRIDTOGGLE");
gridButton.addEventListener('click', () => {
    gridOn = !gridOn;
    gridButton.textContent = "Grid: " + (gridOn ? "ON" : "OFF");
    gridButton.className = (gridOn ? "" : "buttonOff");

    SetGridDisplay(gridOn);
})

let clearButton = document.querySelector("#CLEAR");
clearButton.addEventListener('click', () => {
    if (canClear)
        ClearGrid();
})

function createGrid(numSquares) {
    const container = document.querySelector('.gridContainer');

    destroyGrid();
    SetClearButtonVisibility(false);
    
    for (let h = 0; h < numSquares; h++) {
        let newRow = document.createElement("div");
        newRow.className = "gridRow";
            
            for (let w = 0; w < numSquares; w++) {
                
                let gridSquare = document.createElement("div");
                gridSquare.className = "gridSquare";
                let node = document.createElement("p");
                gridSquare.id = h + "/" + w;
                //node.textContent = h + "/" + w;
                gridSquare.appendChild(node);

                newRow.appendChild(gridSquare);
                

                gridSquare.style.border = (gridOn ? "1px solid gray" : "0px");
                gridSquare.addEventListener("mouseover", () => {
                    if (gridSquare.style.backgroundColor != "black") {
                        gridSquare.style.backgroundColor = "white";
                    }
                    if (mouseDown) {
                        MarkSquare(gridSquare);
                    }
                });

                gridSquare.addEventListener("mouseout", () => {
                    
                    if (gridSquare.style.backgroundColor != "black")
                        MarkSquare(gridSquare, false);
                        //gridSquare.style.backgroundColor = "silver";
                });

                gridSquare.addEventListener("mousedown", () => {
                    MarkSquare(gridSquare);
                })
            }
        container.appendChild(newRow);
    }
}

function MarkSquare(square, isBlack = true) {
    square.style.backgroundColor = (isBlack ? "black" : "silver");
    if (isBlack && canClear == false) {
        SetClearButtonVisibility(true);
    }
}

function SetClearButtonVisibility(b) {
    canClear = b;
    clearButton.className = (canClear ? "" : "buttonOff");
}

function destroyGrid() {
    let squares = document.querySelectorAll('.gridSquare');

    squares.forEach((square) => {
        // to remove the event listeners, first replace the square with a clone of itself
        square.replaceWith(square.cloneNode(true));     
        square.remove();
    })

    let rows = document.querySelectorAll(".gridRow");
    rows.forEach((row) => {
        row.remove();
    })
}

function SetGridDisplay() {
    let squares = document.querySelectorAll('.gridSquare');

    squares.forEach((square) => {
        square.style.border = (gridOn ? "1px solid gray" : "0px");
    })
}

function ClearGrid() {
    let squares = document.querySelectorAll('.gridSquare');

    squares.forEach((square) => {
        square.style.backgroundColor = "silver";
    })

    SetClearButtonVisibility(false);
}

function SetInitialFace() {
    let squares = document.querySelectorAll('.gridSquare');

    const blackSquares = ["1/2", "2/2", "3/2", "1/5", "2/5", "3/5", "5/1", "6/2", "6/3", "6/4", "6/5"];

    squares.forEach((square) => {
        if (blackSquares.includes(square.id)) {
            MarkSquare(square);
        }
    })
}

createGrid(8);
SetInitialFace();