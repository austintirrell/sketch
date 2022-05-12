let gridSize = document.getElementById('gridSize');
const gridSizeDisplay = document.getElementById('gridSizeDisplay');
const grid = document.getElementById('grid');

window.onload = construct();

gridSize.addEventListener('input', function() {
    gridSizeDisplay.innerHTML = gridSize.value;
    construct();
});

function construct() {
    resetGrid();
    for (i=0; i < gridSize.value * gridSize.value; i++) {
        let pixel = document.createElement('div');
        grid.appendChild(pixel);
        grid.lastChild.classList.add('pixel');
    }
}

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}