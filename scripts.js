const container = document.querySelector(".container");
const pixelDiv = document.createElement('div');

let trigger = false;

container.addEventListener('mousedown', () => trigger = true);
container.addEventListener('mouseup', () => trigger = false);
container.addEventListener('mouseover', holdToDraw);

for (let i = 0; i < 1024; i++) {
  container.appendChild(pixelDiv.cloneNode(true));
  container.lastChild.style.cssText = `width: ${500 / 32}px; height: ${500 / 32}px`;
  container.lastChild.addEventListener('mousedown', changeColor);
};

const newGridButton = document.querySelector('button');
newGridButton.addEventListener('click', newGrid)

function newGrid() {
  let size = parseInt(prompt("Syze?"));
  if (typeof(size) !== 'number' || size > 100) {
    alert("Max number is a 100 bro.");
  } else {
    container.style.cssText = `grid-template-columns: repeat(${size}, auto); grid-template-rows: repeat(${size}, auto)`;

    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }

    for (let i = 0; i < size * size ; i++) {
      container.appendChild(pixelDiv.cloneNode(true));
      container.lastChild.style.cssText = `width: ${500 / size}px; height: ${500 / size}px`;
      container.lastChild.addEventListener('mousedown', changeColor);
    }
  }
};

function randomColor() {
  let rR = Math.floor(Math.random() * 255);
  let rG = Math.floor(Math.random() * 255);
  let rB = Math.floor(Math.random() * 255);
  return `rgb(${rR}, ${rG}, ${rB})`;
};

function changeColor(e) {
  if (document.getElementById('rainbow').checked == true) {
    e.target.style.backgroundColor = randomColor();
  } else {
    e.target.style.backgroundColor = document.getElementById('color').value;
  }
};

function holdToDraw(e) {
  if (trigger == true) {
    Array.from(container.children).forEach((element) => {
      element.addEventListener('mouseenter', changeColor);
    });
  } else {
    Array.from(container.children).forEach((element) => {
      element.removeEventListener('mouseenter', changeColor);
    });
  }
};

gridSwitch = document.getElementById('grid');
gridSwitch.addEventListener('change', gridView);

function gridView(e) {
  if (e.target.checked == true) {
    Array.from(container.children).forEach((element) => {
      element.classList.toggle('grid');
    });
  } else {
    Array.from(container.children).forEach((element) => {
      element.classList.toggle('grid');
    });
  }
};