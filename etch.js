let mouseDown = false;
document.body.onmousedown = function() { 
    mouseDown = true;
}
document.body.onmouseup = function() {
    mouseDown = false;
}

let gridOn = true;

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

button = document.querySelector("#GRIDTOGGLE");
button.addEventListener('click', () => {
    gridOn = !gridOn;
    button.textContent = "Grid: " + (gridOn ? "ON" : "OFF");
    button.className = (gridOn ? "" : "buttonOff");

    SetGridDisplay(gridOn);
})

function createGrid(numSquares) {
    const container = document.querySelector('.gridContainer');

    destroyGrid();
    
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
                    //gridSquare.style.borderColor = "white";
                    //gridSquare.style.backgroundColor = "black";
                    if (mouseDown) {
                        gridSquare.style.backgroundColor = "black";
                    }
                });

                gridSquare.addEventListener("mouseout", () => {
                    if (gridSquare.style.backgroundColor != "black")
                        gridSquare.style.backgroundColor = "silver";
                });

                gridSquare.addEventListener("mousedown", () => {
                    gridSquare.style.backgroundColor = "black";
                })
            }
            

        container.appendChild(newRow);
    }
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

createGrid(4);