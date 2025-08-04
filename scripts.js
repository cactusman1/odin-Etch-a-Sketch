const grid = document.querySelector("#container");

function createGrid(x) { //x = number of rows and columns
    if (x < 1) {
        alert("This number is too small");
        getInput();
    }
    else if (x > 64) {
        alert("This number is too large");
        getInput();
    }
    else if (isNaN(x)) {
        alert("This isn't a number.");
        getInput();
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
function getInput() {
    let newGridDimensions = parseInt(prompt("How many boxes would you like per side?(1-64)"));
    return newGridDimensions;
}

let cells = document.querySelectorAll(".cell"); // this'll return every "cell" as NodeList
cells.forEach(cell => { //loops over every "cell" in the nodeList
    cell.addEventListener("mouseover", () => {
        let randomRed = Math.floor(Math.random() * 256);
        let randomBlue = Math.floor(Math.random() * 256);
        let randomGreen = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${randomRed}, ${randomBlue}, ${randomGreen})`;
    })
});

const btn = document.querySelector(".butt");
btn.addEventListener("click", () => { //Once again this loops over every cell in the nodeList 
    cells.forEach(cell => {           // and removes them from the parent individually
        grid.removeChild(cell);

    })


    createGrid(getInput());

    cells = document.querySelectorAll(".cell"); // this'll return every "cell" as NodeList
    cells.forEach(cell => { //loops over every "cell" in the nodeList
        cell.addEventListener("mouseover", () => {
            let randomRed = Math.floor(Math.random() * 256);
            let randomBlue = Math.floor(Math.random() * 256);
            let randomGreen = Math.floor(Math.random() * 256);
            cell.style.backgroundColor = `rgb(${randomRed}, ${randomBlue}, ${randomGreen})`;
        })

    });

});

function increaseOpacity() {
    let opacity = 0;
    for (let i = 0; i <= 10; i++) {
        opacity += 0.1
    }
}