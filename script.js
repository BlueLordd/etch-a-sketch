let container= document.querySelector(".container");


function createGrid(){
    makeColumns(16);
    makeRows(16);
}

function makeColumns(numCols){ //make all the column heads (i.e.-> 0th row)
    for(let i=0;i<numCols;i++){
        let col= document.createElement("div");
        col.className= "col";
        container.appendChild(col);
    }
}
function makeRows(numRows){ //attach cells to each column head
    let cols= document.querySelectorAll(".col");
    for(let i=0;i<cols.length;i++){
        for(let j=0;j<numRows;j++){
            let cell= document.createElement("div");
            cell.className= "cell";
            if(j===0){  //handle super-imposition of row and cell border for 0th row
                cols[i].style.border= "none";
            }
            cols[i].appendChild(cell);
        }
    }
}

createGrid();




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


