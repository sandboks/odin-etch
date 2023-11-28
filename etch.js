function createGrid(numSquares) {
    const container = document.querySelector('.gridContainer');
    
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

createGrid(16);