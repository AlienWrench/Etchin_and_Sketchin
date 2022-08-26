const grid = document.querySelector('#grid');
let gridSize = 16; // width and height will be the same value, as it is a square grid
/*^temp placeholder, should replace with user input*/
for (let i = 0; i < gridSize; i++) {
    let parentBox = document.createElement('div');
    parentBox.classList.add('parent-box');

    for (let j = 0; j < gridSize;  j++) {
        let lilBox = document.createElement('div');
        lilBox.classList.add('lil-box');
        parentBox.append(lilBox);
    }

    grid.append(parentBox);
}

