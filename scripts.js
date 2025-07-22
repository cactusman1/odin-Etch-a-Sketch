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

const cells = document.querySelectorAll(".cell");
for (let i = 0; i <= cell.length; i++) {
    cells.addEventListener("mouseover", () => {
        cell.setAttribute("style", "background-color:Green");
    });
}
