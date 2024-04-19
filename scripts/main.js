slider = document.querySelector('.slider');
let gridSize = slider.value;

let heightOfBox = 512 / gridSize;

const gridWrapper = document.querySelector('.gridWrapper');

for (let i = 0; i < gridSize ** 2; i++) {
    const content = document.createElement('div');
    content.style.cssText = `border: 1px solid black; aspect-ratio: 1 / 1; height: ${heightOfBox}px`;
    content.classList.add(`changeColor${i}`)
    gridWrapper.appendChild(content);
    let changeColor = document.querySelector(`.changeColor${i}`);
    changeColor.addEventListener('mouseover', () => {
        changeColor.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

    });
}

function randomColor() {
    let randomNum = Math.floor(Math.random() * 255);
    return randomNum;
}


