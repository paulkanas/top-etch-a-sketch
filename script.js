const container = document.querySelector('#container');
const button = document.querySelector("button");

let no = 16;
let frame = (700 - no * 2)/no;
container.style.gridTemplateColumns = `repeat(${no}, 1fr)`;
createGrid();

function createGrid() {
    for (i = 1; i <= (no*no); i++) {
        div = container.appendChild(document.createElement('div'));
        div.classList.add('div');
        div.style.border = "1px solid";
        div.style.height = `${frame}px`;
}
}

function clearGrid() {
    var divs = document.querySelectorAll('.div');
    for (i = 0; i < divs.length; i++) {
        divs[i].remove();
    }
}

button.addEventListener("click", () => {
    no = (prompt("Choose the dimensions of your grid"));
    frame = (700 - no * 2)/no;
    container.style.gridTemplateColumns = `repeat(${no}, 1fr)`;
    clearGrid();
    createGrid();
})
