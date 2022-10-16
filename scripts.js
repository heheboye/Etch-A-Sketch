const container = document.querySelector(".container");
const squareDiv = document.createElement('div');
squareDiv.classList.add('squares');

for (let i = 0; i < 256; i++) {
  container.appendChild(squareDiv.cloneNode(true));
  container.lastChild.addEventListener('mouseover', changeColor);
}

function randomColor() {
  let rR = Math.floor(Math.random() * 255);
  let rG = Math.floor(Math.random() * 255);
  let rB = Math.floor(Math.random() * 255);
  return `rgb(${rR}, ${rG}, ${rB})`;
}

function changeColor(e) {
  if (document.getElementById('colors').value == 'rainbow') {
    e.target.style.backgroundColor = randomColor();
  } else {
    e.target.style.backgroundColor = document.getElementById('colors').value;
  }
};

eventType = document.getElementById('events');
eventType.addEventListener('change', changeEventType);

function changeEventType(e) {
  if (e.target.value == 'mouseover') {
    Array.from(container.children).forEach((element) => {
      element.removeEventListener('click', changeColor);
      element.addEventListener('mouseover', changeColor);
    });
  } else {
    Array.from(container.children).forEach((element) => {
      element.removeEventListener('mouseover', changeColor);
      element.addEventListener('click', changeColor);
    });
  }
}