const container = document.querySelector('#container');
const button = document.querySelector("button");

let no = 50;
let frame = (700 - no * 2)/no;

for (i = 1; i <= (no*no); i++) {
    div = container.appendChild(document.createElement('div'));
    div.classList.add('div');
    div.style.border = "1px solid";
    div.style.height = `${frame}px`;
}

container.style.gridTemplateColumns = `repeat(${no}, 1fr)`;


