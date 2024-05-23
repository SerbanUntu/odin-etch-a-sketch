const grid = document.querySelector(".grid");
const resizeButton = document.getElementById("resize-button");

function getRandomNumber(upper) {
  return Math.floor(Math.random() * (upper + 1));
}

function createGrid(size) {
  while(grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild);
  }
  for(let i = 1; i <= size; i++) {
    const row = document.createElement("div");
    row.setAttribute("id", `row-${i}`)
    row.classList.add("row");
    for(let j = 1; j <= size; j++) {
      const square = document.createElement("div");
      const blackSquare = document.createElement("div");
      square.setAttribute("id", `square-${(i - 1) * size + j}`)
      square.classList.add("square");
      blackSquare.classList.add("black-square");
      blackSquare.style.backgroundColor = "black";
      blackSquare.style.opacity = 0;
      square.appendChild(blackSquare);
      square.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        if(+blackSquare.style.opacity < 1) {
          square.style.backgroundColor = `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
          blackSquare.style.opacity = `${+blackSquare.style.opacity + 0.1}`;
        }
      })

      row.appendChild(square);
    }
    grid.appendChild(row);
  }
}

resizeButton.addEventListener("click", (e) => {
  e.preventDefault();
  let userInput = parseInt(prompt("Enter a whole number between 1 and 100"));
  console.log(userInput);
  while(isNaN(userInput) || userInput < 1 || userInput > 100) {
    userInput = parseInt(prompt("Enter a whole number between 1 and 100"));
  }
  createGrid(parseInt(userInput));
})

createGrid(16);