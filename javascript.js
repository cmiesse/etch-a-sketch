let selectedSquares = 0;
let numberSquares;
let number = 16;

setTimeout(()=>{
    numberSquares = document.getElementById("number")
    const container = document.getElementById("container");
    container.style.cssText =  'grid-template-columns : repeat('+number+',1fr)';
    for(let i = 0; i<number*number; i++){
        const square = document.createElement("div")
        container.appendChild(square)
        square.classList.add('square')
        square.addEventListener('mouseenter', ()=>colorElement(square))
    }
}, 1000)


function colorElement(element){
    if(selectedSquares <100 && selectedSquares < number*number && !element.className.includes('coloredSquare')){
        element.classList.add('coloredSquare')
        selectedSquares++;
        numberSquares.innerText = selectedSquares;
    } 
}

function removePlusPrompt(){
    selectedSquares = 0;
    numberSquares.innerText = selectedSquares;
    const container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    number = prompt("Enter the number of squares by row (Max 100) ")
    if(isNaN(number)) {number = 16; alert("Enter a number between 1 and 100")}
    number = (number >= 100 || number < 1 )? 100 : number;
    container.style.cssText =  'grid-template-columns : repeat('+number+',1fr)';
    for(let i = 0; i<number*number; i++){
        const square = document.createElement("div")
        container.appendChild(square)
        square.classList.add('square')
        square.addEventListener('mouseenter', ()=>colorElement(square))
    }
}