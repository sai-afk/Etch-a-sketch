window.onload = function() {
    let gridSize = 16;
    
    function createGrid(gridSize) {
      const gridContainer = document.getElementById("gridContainer");
      gridContainer.innerHTML = '';
      
      for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        for (let j = 0; j < gridSize; j++) {
          const cell = document.createElement("div");
          cell.style.width = `${400 / gridSize}px`;
          cell.style.height = `${400 / gridSize}px`;
          cell.style.backgroundColor = "lightGray";
          cell.style.border = "1px solid black";
          cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor = "black";
          });
          row.appendChild(cell);
        }
        gridContainer.appendChild(row);
      }
    }
  
    createGrid(gridSize);
    
    const switchButton = document.getElementById("switchButton");
    switchButton.addEventListener("click", function() {
      gridSize = gridSize === 16 ? 64 : 16;
      createGrid(gridSize);
    });
  };
  