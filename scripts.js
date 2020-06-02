function generateGrid(divNum = 20 * 20, className = 'grid-20x20') {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';
  for (let i = 0; i < divNum; i += 1) {
    const gridDiv = document.createElement('div');
    gridContainer.classList.remove('grid-10x10', 'grid-20x20', 'grid-30x30');
    gridContainer.classList.add(className);
    gridContainer.appendChild(gridDiv);
  }
}
generateGrid();

function chooseGrid() {
  const gridButtons = document.querySelectorAll('.grid-btn');
  gridButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('grid-10')) {
        gridButtons[0].classList.add('active-btn');
        gridButtons[1].classList.remove('active-btn');
        gridButtons[2].classList.remove('active-btn');
        generateGrid(10 * 10, 'grid-10x10');
      } else if (button.classList.contains('grid-20')) {
        gridButtons[0].classList.remove('active-btn');
        gridButtons[1].classList.add('active-btn');
        gridButtons[2].classList.remove('active-btn');
        generateGrid();
      } else if (button.classList.contains('grid-30')) {
        gridButtons[0].classList.remove('active-btn');
        gridButtons[1].classList.remove('active-btn');
        gridButtons[2].classList.add('active-btn');
        generateGrid(30 * 30, 'grid-30x30');
      }
    });
  });
}
chooseGrid();
