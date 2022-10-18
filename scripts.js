const container = document.querySelector(".container");
const squareDiv = document.createElement('div');
squareDiv.classList.add('squares');

let trigger = false;

container.addEventListener('mousedown', () => trigger = true);
container.addEventListener('mouseup', () => trigger = false);
container.addEventListener('mouseover', holdToDraw);

// fill the container with the square divs to draw on
for (let i = 0; i < 1024; i++) {
  container.appendChild(squareDiv.cloneNode(true));
  container.lastChild.addEventListener('mousedown', changeColor);
}

function randomColor() {
  let rR = Math.floor(Math.random() * 255);
  let rG = Math.floor(Math.random() * 255);
  let rB = Math.floor(Math.random() * 255);
  return `rgb(${rR}, ${rG}, ${rB})`;
}

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
}

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
}