let gridSize = 16;
let heightOfBox = 1024 / gridSize;

const gridWrapper = document.querySelector('.gridWrapper');

for (let i = gridSize ** 2; i * i > 0; i--) {
    const content = document.createElement('div');
    content.style.cssText = `border: 1px solid black; aspect-ratio: 1 / 1; height: ${heightOfBox}px`;
    gridWrapper.appendChild(content);
}