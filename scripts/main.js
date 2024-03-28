let gridSize = 16;
const gridWrapper = document.querySelector('.gridWrapper');
const content = document.createElement('div');
content.classList.add('contentBox');
content.style.cssText = "border: 1px solid black; aspect-ratio: 1 / 1; height: 10%";
for (let i = gridSize; i > 0; i--) {
    gridWrapper.appendChild(content);
}