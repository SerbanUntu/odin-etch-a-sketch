const grid = document.querySelector(".grid");

let mousedown = false;

document.addEventListener("mousedown", (e) => {
  e.preventDefault();
  mousedown = true;
});

document.addEventListener("mouseup", (e) => {
  e.preventDefault();
  mousedown = false;
});

function getRandomNumber(upper) {
  return Math.floor(Math.random() * (upper + 1));
}

function createGrid(size) {
  while(grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild);
  }
  grid.style.gridTemplateColumns = `repeat(160, ${size}px)`;
  grid.style.gridTemplateRows = `repeat(160, ${size}px)`;
  for(let i = 1; i <= 16000; i++) {
    const square = document.createElement("div");
    const blackSquare = document.createElement("div");
    square.setAttribute("id", `square-${i}`)
    square.classList.add("square");
    square.addEventListener("mouseover", (e) => {
      if(mousedown) {
        e.preventDefault();
        square.style.backgroundColor = `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
      }
    });
    grid.appendChild(square);
  }
}

createGrid(16);