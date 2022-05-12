const gridSize = document.getElementById('gridSize');
const gridSizeDisplay = document.getElementById('gridSizeDisplay');
const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');
const colorButton = document.getElementById('color');
const rainbowButton = document.getElementById('rainbow');
const resetButton = document.getElementById('reset');

window.onload = construct();

gridSize.addEventListener('input', function() {
    gridSizeDisplay.innerHTML = gridSize.value;
    construct();
});



function construct() {
    //if pixels exist, erase
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    //build new pixel grid
    for (i=0; i < gridSize.value * gridSize.value; i++) {
        let pixel = document.createElement('div');
        grid.appendChild(pixel);
        grid.lastChild.classList.add('pixel');
    }
    grid.style.gridTemplateColumns = 'repeat('+gridSize.value+', 1fr)';
    grid.style.gridTemplateRows = 'repeat('+gridSize.value+', 1fr)';
}