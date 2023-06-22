function createMultiplicationTable(rows, columns) {
  const tableContainer = document.getElementById("tableContainer");
  const table = document.createElement("table");
  table.classList.add("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headerCell = document.createElement("th");
  headerCell.textContent = "x";
  headerRow.appendChild(headerCell);
  for (let i = 1; i <= columns; i++) {
    const headerCell = document.createElement("th");
    headerCell.textContent = i;
    headerRow.appendChild(headerCell);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  for (let i = 1; i <= rows; i++) {
    const row = document.createElement("tr");
    const headerCell = document.createElement("th");
    headerCell.textContent = i;
    row.appendChild(headerCell);
    for (let j = 1; j <= columns; j++) {
      const cell = document.createElement("td");
      cell.textContent = i * j;
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
}

let rows = +prompt("Write number of rows!");
let columns = +prompt("Write number of columns!");

// Validate that rows and columns are numbers
while (isNaN(rows) || isNaN(columns)) {
  rows = +prompt("Please enter a valid number of rows!");
  columns = +prompt("Please enter a valid number of columns!");
}

createMultiplicationTable(rows, columns);
