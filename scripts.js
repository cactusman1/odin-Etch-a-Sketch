const grid = document.querySelector("#container");

function createGrid(x) { //x = number of rows and columns
    if (isNaN(x)) {
        alert("This isn't a number.");
    }
    else if (x < 1) {
        alert("This number is too small");
    }
    else if (x > 64) {
        alert("This number is too large");
    }
    else {
        for (rows = 0; rows < x; rows++) {
            for (columns = 0; columns < x; columns++) {
                const cell = document.createElement("div");
                grid.appendChild(cell).className = "cell";
                cell.setAttribute("style", `height:${540 / x}px;width:${960 / x}px`)

            }
        }
    }
};
createGrid(16);


let cells = document.querySelectorAll(".cell"); // this'll return every "cell" as NodeList
cells.forEach(cell => { //loops over every "cell" in the nodeList
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "red";
    })
});

const btn = document.querySelector(".butt");
btn.addEventListener("click", () => { //Once again this loops over every cell in the nodeList 
    cells.forEach(cell => {           // and removes them from the parent individually
        grid.removeChild(cell);

    })

    let newGridDimensions = prompt("How many boxes would you like per side?(1-64)");
    createGrid(newGridDimensions);

    cells = document.querySelectorAll(".cell"); // this'll return every "cell" as NodeList
    cells.forEach(cell => { //loops over every "cell" in the nodeList
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "red";
        })

    });

});

