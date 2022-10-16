const container = document.querySelector(".container");
const squareDiv = document.createElement('div');
squareDiv.classList.add('squares');

for (let i = 0; i < 256; i++) {
  container.appendChild(squareDiv.cloneNode(true));
}