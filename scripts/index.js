const grid = document.querySelector(".grid");
for(let i = 1; i <= 16; i++) {
  const row = document.createElement("div");
  row.setAttribute("id", `row-${i}`)
  row.classList.add("row");
  for(let j = 1; j <= 16; j++) {
    const square = document.createElement("div");
    square.setAttribute("id", `square-${(i - 1) * 16 + j}`)
    square.classList.add("square");
    row.appendChild(square);
  }
  grid.appendChild(row);
}