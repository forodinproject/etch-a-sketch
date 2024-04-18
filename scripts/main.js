let gridSize = 16;
let heightOfBox = 512 / gridSize;

const gridWrapper = document.querySelector('.gridWrapper');

for (let i = gridSize ** 2; i * i > 0; i--) {
    const content = document.createElement('div');
    content.style.cssText = `border: 1px solid black; aspect-ratio: 1 / 1; height: ${heightOfBox}px`;
    content.classList.add('changeColor')
    gridWrapper.appendChild(content);

}
changeColor = document.querySelectorAll('.changeColor')

for (change of changeColor) {
    change.addEventListener('mouseover', () => {
        change.style.backgroundColor = 'black';
    })
}
