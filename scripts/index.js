const grid = document.querySelector(".grid");
const resizeButton = document.getElementById("resize-button");

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
      square.setAttribute("id", `square-${(i - 1) * size + j}`)
      square.classList.add("square");

      square.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        square.classList.add("hovered");
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