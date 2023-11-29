let button = document.querySelector("#RESIZE");

button.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size [0-128]");
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize > 128 || newSize < 0) {
        alert("Invalid input. Please enter an integer number [0-128]");
    }
    else {
        createGrid(newSize);
    }
    
});

function createGrid(numSquares) {
    const container = document.querySelector('.gridContainer');

    destroyGrid();
    
    for (let h = 0; h < numSquares; h++) {
        let newRow = document.createElement("div");
        newRow.className = "gridRow";
            
            for (let w = 0; w < numSquares; w++) {
                //continue;
                
                let gridSquare = document.createElement("div");
                gridSquare.className = "gridSquare";
                let node = document.createElement("p");
                gridSquare.id = h + "/" + w;
                //node.textContent = h + "/" + w;
                gridSquare.appendChild(node);

                newRow.appendChild(gridSquare);

                gridSquare.addEventListener("mouseover", () => {
                    gridSquare.style.backgroundColor = "black";
                });

                gridSquare.addEventListener("mouseout", () => {
                    gridSquare.style.backgroundColor = "white";
                });
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

createGrid(4);