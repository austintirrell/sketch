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
    toggleButtons(mode)
})
rainbowButton.addEventListener('click', function() {
    mode = 'rainbow'
    toggleButtons(mode)
})
eraserButton.addEventListener('click', function() {
    mode = 'eraser'
    toggleButtons(mode)
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
                pixel.style.background = '#'+rainbow()+rainbow()+rainbow()+rainbow()+rainbow()+rainbow()
            } else if (mode == 'eraser') {
                pixel.style.background = '#FFFFFF'
            } else {
                console.log('That should not happen')
            }
        })
        grid.appendChild(pixel)
    }
    grid.style.gridTemplateColumns = 'repeat('+gridSize.value+', 1fr)'
    grid.style.gridTemplateRows = 'repeat('+gridSize.value+', 1fr)'
}

function rainbow() {
    let num = Math.floor(Math.random() * 15)
    let values = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    return values[num]
}
<<<<<<< HEAD

function toggleButtons(mode) {
    if (mode == 'color') {
        colorButton.classList.add('active')
        rainbowButton.classList.remove('active')
        eraserButton.classList.remove('active')
    } else if (mode == 'rainbow') {
        rainbowButton.classList.add('active')
        colorButton.classList.remove('active')
        eraserButton.classList.remove('active')
    } else if (mode == 'eraser') {
        eraserButton.classList.add('active')
        colorButton.classList.remove('active')
        rainbowButton.classList.remove('active')
    }
}
=======
>>>>>>> 780b6aa3ee92f5249ba3d2a0456b5636133f9a62
