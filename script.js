const grid = document.getElementsByClassName("grid")[0];
var gridSize = 16;

function resetGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  createGrid(gridSize);
}

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.style.width = `${480 / size}px`;
      div.style.height = `${480 / size}px`;
      div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
      });
      grid.appendChild(div);
    }
  }
}

function changeGridSize() {
  gridSize = parseInt(prompt("Enter new grid size"));
  while (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
    gridSize = parseInt(prompt("Enter new grid size"));
  }
  console.log(gridSize);
  resetGrid();
}

createGrid(gridSize);
