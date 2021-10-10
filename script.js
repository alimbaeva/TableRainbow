const inner = document.querySelector('.inner');
const squareColors = ['#ed220d', '#b542e5', '#0d93ed', '#f2770b', '#8affbc', '#f2ff8a', '#ff38c2', '#e37f35'];
const BLOKS = 2604;

for (let i = 0; i < BLOKS; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    inner.appendChild(square)
}

function setColor(elem) {
    const color = getRandomColor();
    elem.style.background = color;
    elem.style.boxShadow = `10px 10px 10px ${color}, -20px -20px 20px ${color}`;
}

function removeColor(elem) {
    elem.style.background = '#2d2d2d';
    elem.style.boxShadow = '0 0 4px #000';
    elem.style.transition = '3s ease';
}

const getRandomColor = () => squareColors[Math.floor(Math.random() * squareColors.length)];
