const gridContainer = document.querySelector("#gridContainer");
const body = document.querySelector("body");
const clearButton = document.querySelector("button");
const eraserButton = document.querySelector("input");
const gridSlider = document.querySelector("#dimensionSlider");
const value = document.querySelector("#value");
const colorWheel = document.querySelector("#colorWheel");
let mousePressed = false;
let eraser = false;
dimension = 16;  // The grid will be size dimension x dimension
function updateDimension() {
    {
        value.textContent = `${gridSlider.value} x ${gridSlider.value} grid`;
        populateGrid(gridSlider.value);
    }
}
function populateGrid(dimension) {
    resetBoard();
    for (let i = 0; i < dimension; i++) {
        let tempDivRow = document.createElement("div"); // creating the div row that will hold dimension number of divs
        tempDivRow.setAttribute("class", "row")
        tempDivRow.style.display = "flex";
        tempDivRow.style.height = `calc(100vh/${dimension})`;
        gridContainer.appendChild(tempDivRow);
        for (let j = 0; j < dimension; j++) {
            let tempDivSquare = document.createElement("div");
            tempDivSquare.setAttribute("class", "square");
            tempDivSquare.setAttribute("style", `width: calc(100vh/${dimension})`);
            tempDivSquare.addEventListener("mouseover", function (e) {
                if (eraser && mousePressed === true) {
                    e.target.style.backgroundColor = "white";
                }
                else if (mousePressed === true) {
                    e.target.style.backgroundColor = `${colorWheel.value}`;
                }
            })
            tempDivSquare.addEventListener("mousedown", function (e) {
                if (eraser) {
                    e.target.style.backgroundColor = "white";
                }
                else {
                    e.target.style.backgroundColor = `${colorWheel.value}`;
                }
            })
            tempDivSquare.addEventListener("dragover", function (e) {
                if (eraser) {
                    e.target.style.backgroundColor = "white";
                }
                else if (mousePressed === true) {
                    e.target.style.backgroundColor = `${colorWheel.value}`;
                }
            })
            tempDivRow.appendChild(tempDivSquare);
        }
    }
}
function resetBoard() {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.remove();
    });
}

clearButton.addEventListener("click", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
});
eraserButton.addEventListener("click", () => {
    eraser = !eraser;
})
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
gridSlider.addEventListener("input", updateDimension);
populateGrid(dimension);
updateDimension();
