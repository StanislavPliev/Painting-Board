const boardNode = document.querySelector('#board');
const colors = ['#FF6400', '#FFA900', '#1142AA', '#00A383', '#01939A', '#FBFE00', '#7309AA', '#BDF400'];
const SQUARES_QUANTITY = 500;

for (let i = 0; i < SQUARES_QUANTITY; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);

  boardNode.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}