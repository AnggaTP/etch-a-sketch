// container for the grid area
const area = document.querySelector('.container')
const width = 600
area.style = `display:flex; flex-wrap : wrap; width:${width}px;align-items:center;border:1px solid black`

// size
let size = 16 

let color = '#332e3c'

let mouseDown = false

document.body.onmousedown = () => {
    mouseDown = true
}

document.body.onmouseup = () => {
    mouseDown = false
}

//create the grid area
for(let j = 0;j<(size*size);j++){
    const pixel = document.createElement('div')
    pixel.style.cssText = `border: 0.5px solid grey;width:${width/size}px;height:${width/size}px;margin:0;box-sizing:border-box`
    pixel.addEventListener('mouseover', () => { 
        if(mouseDown === true){
            pixel.style.cssText += `background-color : ${color}` 
        }
    })

    pixel.addEventListener('mousedown', () => {
        pixel.style.cssText += `background-color : ${color}` 
    })
    pixel.className = 'grid'
    area.appendChild(pixel)
}

const clearBtn = document.querySelector('#btnClear')
const blueBtn = document.querySelector('#btnBlue')
const yellowBtn = document.querySelector('#btnYellow')
const blackBtn = document.querySelector('#btnBlack')
// const btn16 = document.querySelector("#btn16")
// const btn24 = document.querySelector("#btn24")

clearBtn.addEventListener('click', function(){
    location.reload()
})

blueBtn.addEventListener('click', function(){
    color = '#20a4f3'
})

yellowBtn.addEventListener('click', function(){
    color = '#c7ef00'
})

blackBtn.addEventListener('click', function(){
    color = '#332e3c'
})

// btn16.addEventListener('click', function(){
//     size = 16
// })

// btn24.addEventListener('click', function(){
//     size = 24
// })