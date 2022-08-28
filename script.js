const grid = document.querySelector('#grid');
const slider = document.querySelector('#grid-size-choice');
let gridSize = slider.value; //starting value!

function gridCreator(gridSize) {
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

    const boxes = document.querySelectorAll('.lil-box');

    boxes.forEach(box => {
        box.addEventListener('mouseenter', (e) =>{ 
            box.classList.add('lil-box-event'); 
        });
    }); 

}

gridCreator(gridSize);

function changeGridSize (gridChange) {
    clearSketch();
    gridCreator(gridSize);
}

function clearSketch(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }

    gridCreator(gridSize);
}

const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', (e) => {
    clearSketch(grid);
});

slider.addEventListener('input', (e) => {
    gridSize = slider.value;
    clearSketch(grid);
})



