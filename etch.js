function createGrid() {
    const container = document.querySelector('.gridContainer');
    
    for (let h = 0; h < 16; h++) {
        let newRow = document.createElement("div");
        newRow.className = "gridRow";
            
            for (let w = 0; w < 16; w++) {
                //continue;
                
                let gridSquare = document.createElement("div");
                gridSquare.className = "gridSquare";
                let node = document.createElement("p");
                node.textContent = h + "/" + w;
                gridSquare.appendChild(node);

                newRow.appendChild(gridSquare);
            }
            

        container.appendChild(newRow);
    }

    /*
        let currentBox = document.createElement("li");
        currentBox.textContent = roundsPlayed;
        newRow.appendChild(currentBox);

        currentBox = document.createElement("li");
        currentBox.textContent = choices[p1];
        if (outcome == 2) {
            currentBox.style.backgroundColor = "greenyellow";
        }
        newRow.appendChild(currentBox);

        currentBox = document.createElement("li");
        currentBox.textContent = choices[p2];
        if (outcome == 1) {
            currentBox.style.backgroundColor = "salmon";
        }
        newRow.appendChild(currentBox);


    if (mostRecentRow != null) {
        container.insertBefore(newRow, mostRecentRow);
    }
    else {
        container.appendChild(newRow);
    }
    mostRecentRow = newRow;
    */
}

createGrid();