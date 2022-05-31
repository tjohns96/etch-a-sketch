const gridContainer = document.querySelector("#gridContainer");
const body = document.querySelector("body");
const clearButton = document.querySelector("button");
let mousePressed = false;
dimension = 16;  // The grid will be size dimension x dimension
function populateGrid(dimension) {
    for (let i = 0; i < dimension; i++) {
        let tempDivRow = document.createElement("div"); // creating the div row that will hold dimension number of divs
        tempDivRow.setAttribute("class", "row")
        tempDivRow.setAttribute("style", "display:flex; height: calc(100vh*10/160); width: 100vh");
        gridContainer.appendChild(tempDivRow);
        for (let j = 0; j < dimension; j++) {
            let tempDivSquare = document.createElement("div");
            tempDivSquare.setAttribute("class", "square");
            tempDivSquare.setAttribute("style", "width: calc(100vh*10/160)");
            tempDivSquare.addEventListener("mouseover", function (e) {
                if (mousePressed === true) {
                    e.target.style.backgroundColor = "black";
                }
            })
            tempDivSquare.addEventListener("mousedown", function (e) {
                e.target.style.backgroundColor = "black";
            })
            tempDivSquare.addEventListener("dragover", function (e) {
                if (mousePressed === true) {
                    e.target.style.backgroundColor = "black";
                }
            })
            tempDivRow.appendChild(tempDivSquare);
        }
    }
}

clearButton.addEventListener("click", ()=>{
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.style.backgroundColor = "white";
    });
});
body.addEventListener("mousedown", () => {
    mousePressed = true;
    console.log("working");
});
body.addEventListener("mouseup", () => {
    mousePressed = false;
});
body.addEventListener("dragend", () => {
    mousePressed = false;
});
body.addEventListener("dragstart", () => {
    mousePressed = true;
});

populateGrid(dimension);
