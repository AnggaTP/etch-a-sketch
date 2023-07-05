// const main = document.querySelector('.main-container')
// main.style = 'display:flex; justify-content:center;align-item :center'



// container for the grid area
const area = document.querySelector('.container')
const width = 600
area.style = `display:flex; flex-wrap : wrap; width:${width}px;align-items:center`

// size
const size = 20 

let color = 'black'

//create the grid area
for(let j = 0;j<(size*size);j++){
    const pixel = document.createElement('div')
    pixel.style.cssText = `border:1px solid black;width:${width/size}px;height:${width/size}px;margin:0;box-sizing:border-box`
    pixel.onmouseover = function(){
        pixel.style.cssText += `background-color : ${color}`
    }
    pixel.className = 'grid'
    area.appendChild(pixel)
}

const clearBtn = document.querySelector('#btnClear')
const blueBtn = document.querySelector('#btnBlue')
const yellowBtn = document.querySelector('#btnYellow')
const blackBtn = document.querySelector('#btnBlack')

clearBtn.addEventListener('click', function(){
    location.reload()
})

blueBtn.addEventListener('click', function(){
    color = 'blue'
})

yellowBtn.addEventListener('click', function(){
    color = 'yellow'
})

blackBtn.addEventListener('click', function(){
    color = 'black'
})