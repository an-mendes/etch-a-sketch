
const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';
container.style.height = '100vh';
container.style.width = '100vw';
container.style.backgroundColor = 'black';

function createGrid(numberOfSquares) {
    for (let i = 0; i <= numberOfSquares * numberOfSquares; i++) {
        const square = document.createElement('div');
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        square.classList.add('square');
        // todo fix this
        square.style.height = `${viewportHeight / numberOfSquares}px`;
        square.style.width = `${viewportWidth / numberOfSquares}px`;
        square.style.backgroundColor = 'white';
        
        container.appendChild(square);
    }
    squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            let currentColor = window.getComputedStyle(square).backgroundColor;
            let r = parseInt(currentColor.substring(4, 7))
            let g = parseInt(currentColor.substring(9,12))
            let b = parseInt(currentColor.substring(14,17))
            r = Math.max(r-25, 0);
            g = Math.max(g-25, 0);
            b = Math.max(b-25, 0);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    })
}

const btn = document.querySelector('.spaghetti');
function removeGrid() {
    squares = document.querySelectorAll('.square');
    if (squares) {
        squares.forEach(square => {
            container.removeChild(square);
        })
    }

}

btn.addEventListener('click', () => {
    
    let numberOfSquares = prompt("How many squares");
    removeGrid();
    createGrid(numberOfSquares);
    
});

