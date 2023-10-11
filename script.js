let container= document.querySelector(".container");
const containerWidth= "500px";
const containerHeight= "500px";


// TAKING USER INPUT AND MAKING GRID OF INPUT SIZE
let intInput;
do{
    let userInput= prompt("Enter Grid dimensions between 2 to 100 : ");
    intInput= parseInt(userInput);
    if( !isNaN(intInput) && intInput>=2 && intInput<=100)
        break;
}
while(true)

createGrid(intInput);

function createGrid(input){
    makeColumns(input);
    makeRows(input);
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


// GENERATE COLORS ON MOUSE HOVER BY USER
let gridCell= document.querySelectorAll(".cell");

gridCell.forEach( cell => {
    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor= rgbColor();
    })
})

function rgbColor(){
    const letters= "0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+= letters[ Math.floor( Math.random()*16 ) ]
    }
    return color;
}


