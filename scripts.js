const grid = document.querySelector("#container");

function createGrid(x) {
    for (rows = 0; rows < x; rows++) {
        for (columns = 0; columns < x; columns++) {
            const cell = document.createElement("div");
            grid.appendChild(cell).className = "cell";
            cell.setAttribute("style", "height:60px;width:60px")

        }
    }

}
createGrid(16);

const cells = document.querySelectorAll(".cell"); // this'll return every "cell" as NodeList
cells.forEach(cell => { //
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "green";
    })
    cell.addEventListener("mouseout", () => {
        cell.style.backgroundColor = "white";
    })
})
