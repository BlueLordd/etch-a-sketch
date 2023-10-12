let container= document.querySelector(".container");
const containerWidth= "600px";
const containerHeight= "500px";
let userInput=64;
let cellColor;



//dom needs to load first before taking user input via slider & furthur actions
document.addEventListener("DOMContentLoaded", function() {
    let slider = document.querySelector("#slider");
    let currentSliderValue = document.querySelector("#sliderValue");

    createGrid(userInput); //default initial values
    cellColor= "black";

    slider.addEventListener("input", function () {
        userInput = this.value;
        currentSliderValue.innerText = `${this.value}`;
        createGrid(userInput);
    });

    const blackButton= document.querySelector("#black");
    const rgbButton= document.querySelector("#rgb");
    const eraseButton= document.querySelector("#erase");
    blackButton.addEventListener("click", () => {
        cellColor= "black";
    })
    rgbButton.addEventListener("click", () => {
        cellColor= "rgb";
    })  
    eraseButton.addEventListener("click", () => {
        cellColor= "none";
    })

    const colorPicker= document.querySelector("#colorPicker");
    colorPicker.addEventListener("input", function(){
        cellColor= this.value;
    })
});



//create dynamic grid according to user input
function createGrid(input){
    container.innerHTML="";
    let numCols= input;
    let numRows= input;
    makeColumns(numCols);
    makeRows(numRows);  

    let gridCell= document.querySelectorAll(".cell");
    gridCell.forEach( cell => {
        cell.addEventListener("mouseenter", () => {
            if(cellColor==="black")
                cell.style.backgroundColor= "black";
            else if(cellColor==="rgb")
                cell.style.backgroundColor= rgbColor();
            else if(cellColor==="none")
                cell.style.backgroundColor= "transparent";
            else
                cell.style.backgroundColor= cellColor;
        })
    })

    const resetButton= document.querySelector("#reset");
    resetButton.addEventListener("click", () => {
        gridCell.forEach( cell => {
            cell.style.backgroundColor= "transparent";
        })
    })
}



function makeColumns(numCols){ //make all the column heads (i.e.-> 0th row)
    for(let i=0;i<numCols;i++){
        let col= document.createElement("div");
        col.className= "col";
        col.style.width= `calc(${containerWidth} / ${numCols})`;
        container.appendChild(col);
    }
}
function makeRows(numRows){ //attach cells to each column head
    let cols= document.querySelectorAll(".col");
    for(let i=0;i<cols.length;i++){
        for(let j=0;j<numRows;j++){
            let cell= document.createElement("div");
            cell.className= "cell";
            cell.style.width= `calc(${containerWidth} / ${numRows})`;
            cell.style.height= `calc(${containerHeight} / ${numRows})`;
            cols[i].appendChild(cell);
        }
    }
}



function rgbColor(){
    const letters= "0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+= letters[ Math.floor( Math.random()*16 ) ]
    }
    return color;
}


