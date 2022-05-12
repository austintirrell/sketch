const gridSize = document.getElementById('gridSize')
const gridSizeDisplay = document.getElementById('gridSizeDisplay')
const grid = document.getElementById('grid')
const colorPicker = document.getElementById('colorPicker')
const colorButton = document.getElementById('color')
const rainbowButton = document.getElementById('rainbow')
const eraserButton = document.getElementById('erase')
const resetButton = document.getElementById('reset')
let mode = 'color'

window.onload = construct()

gridSize.addEventListener('input', function() {
    gridSizeDisplay.innerHTML = gridSize.value
    construct()
})
colorButton.addEventListener('click', function() {
    mode = 'color'
})
rainbowButton.addEventListener('click', function() {
    mode = 'rainbow'
})
eraserButton.addEventListener('click', function() {
    mode = 'eraser'
})
resetButton.addEventListener('click', function() {
    construct()
})

function construct() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    for (i=0; i < gridSize.value * gridSize.value; i++) {
        let pixel = document.createElement('div')
        pixel.addEventListener('mouseover', function() {
            if (mode == 'color') {
                pixel.style.background = String(colorPicker.value)
            } else if (mode == 'rainbow') {
                pixel.style.background = '#'+rainbow()+rainbow()+rainbow()
            } else if (mode == 'eraser') {
                pixel.style.background = '#FFFFFF'
            } else {
                console.log('That should not happen')
            }
        })
        grid.appendChild(pixel)
        grid.lastChild.classList.add('pixel')
    }
    grid.style.gridTemplateColumns = 'repeat('+gridSize.value+', 1fr)'
    grid.style.gridTemplateRows = 'repeat('+gridSize.value+', 1fr)'
}

function rainbow() {
    let num = Math.floor(Math.random() * 6)
    let values = ['A','B','C','D','E','F']
    return values[num]
}