function generateGrid(divNum = 1024, className = 'grid-32x32') {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';
  for (let i = 0; i < divNum; i += 1) {
    const gridDiv = document.createElement('div');
    gridContainer.classList.remove('grid-16x16', 'grid-32x32', 'grid-64x64');
    gridContainer.classList.add(className);
    gridContainer.appendChild(gridDiv);
  }
}
generateGrid();

function chooseGrid() {
  const gridButtons = document.querySelector('.grid-buttons');
  gridButtons.addEventListener('click', (event) => {
    if (event.target.classList.contains('grid-16')) {
      event.target.classList.add('red-color');
      generateGrid(256, 'grid-16x16');
    } else if (event.target.classList.contains('grid-32')) {
      generateGrid();
    } else if (event.target.classList.contains('grid-64')) {
      generateGrid(4096, 'grid-64x64');
    }
  });
}
chooseGrid();
