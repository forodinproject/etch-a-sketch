let slider = document.querySelector('.slider');
let gridWrapper = document.querySelector('.gridWrapper');
let gridSize = slider.value || 16;
let heightOfBox = 512 / gridSize;

function createInitialGrid() {
    for (let i = 0; i < gridSize ** 2; i++) {
        const content = document.createElement('div');
        content.style.cssText = `border: 1px solid black; aspect-ratio: 1 / 1; height: ${heightOfBox}px`;
        gridWrapper.appendChild(content);
        content.addEventListener('mouseover', () => {
            content.style.backgroundColor = randomColor();
        });
    }
}

function randomColor() {
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}

function randomNum() {
    return Math.floor(Math.random() * 255);
}

createInitialGrid();

slider.addEventListener('input', () => {
    gridSize = slider.value;
    heightOfBox = 512 / gridSize;
    gridWrapper.textContent = '';
    createInitialGrid();
})