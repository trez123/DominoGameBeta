const max = 28;
let addedDominos = 0;
const dominoBoard = document.getElementById('dominoBoard');

function addDomino() {
    if(addedDominos < max){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        const domino = document.createElement('div');
        const img = document.createElement('img');
        img.classList.add('domino-img');
        img.src = '/public/assets/images/6-6.png' 
    
        if(addedDominos % 2 == 0){
            domino.classList.add('domino-90')
            img.classList.add('domino-img90')
        }
        domino.appendChild(img)

        gridItem.appendChild(domino);
    
        dominoBoard.appendChild(gridItem);

        addedDominos++;
    }
}

function removeDomino(){
   if (addedDominos > 0){
    dominoBoard.removeChild(dominoBoard.lastChild);
    addedDominos--;
   } 
}

function leftOrientation(){
    fetch('/left', {
        method: 'GET',
    })
    .then(response => response.text())
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error('Error triggering function:', error);
    });
}

function rightOrientation(){
    fetch('/right', {
        method: 'GET',
    })
    .then(response => response.text())
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error('Error triggering function:', error);
    });
}