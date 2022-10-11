const container = document.querySelector('#container');
const button = document.querySelector("#Start");
const clear = document.querySelector("#Clear");
let trans = 0;
let r = 100;

let no = 16;
let frame = (700)/no;
// let frame = (700 - no * 2)/no;
container.style.gridTemplateColumns = `repeat(${no}, 1fr)`;
createGrid();
makeHoverable();

function createGrid() {
    for (i = 1; i <= (no*no); i++) {
        div = container.appendChild(document.createElement('div'));
        div.classList.add('div');
        // div.style.border = "1px solid";
        div.style.height = `${frame}px`;
}
}

function makeHoverable() {
let divvies = document.querySelectorAll('.div');
for (let dives of divvies) {
    dives.addEventListener("mouseover", () => {
        // let rainbow = [Math.floor(Math.random() * 255)];
        // let rainbow2 = [Math.floor(Math.random() * 255)];
        // let rainbow3 = [Math.floor(Math.random() * 255)];
        // dives.style.backgroundColor = `rgb(${rainbow}, ${rainbow2}, ${rainbow3})`;
        // dives.style.backgroundColor = 'rgb(255, 255, 255)';
        
        dives.style.backgroundColor = "rgb(0, 0, 0)";
        dives.style.opacity = Number(dives.style.opacity) + 0.1;
    })
}}

function clearGrid() {
    var divs = document.querySelectorAll('.div');
    for (i = 0; i < divs.length; i++) {
        divs[i].remove();
    }
}

button.addEventListener("click", () => {
    no = (prompt("Choose the dimensions of your grid"));
    if (no > 99) {
        alert("Choose a number below 100!");
    } else {
    frame = (700 - no * 2)/no;
    container.style.gridTemplateColumns = `repeat(${no}, 1fr)`;
    clearGrid();
    createGrid();
    makeHoverable();
    }
})

clear.addEventListener("click", () => {
    clearGrid();
    createGrid();
    makeHoverable();
})