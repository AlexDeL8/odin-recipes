'use strict'

let modal = document.getElementById('recipe-modal')
let recipeModalContentArray = Array.from(document.getElementsByClassName('modal-content'));
function closeModal() {
    modal.style.display = "none";
    for(let recipeModal of recipeModalContentArray) {
        recipeModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) 
        closeModal()
}

let closeButtons = Array.from(document.getElementsByClassName('close'));
for(let closeButton of closeButtons) {
    closeButton.addEventListener('click', (e) => {
        closeModal()
    });
}

let recipeElementsArray = Array.from(document.getElementsByClassName('recipe-link'));
for(let recipeElement of recipeElementsArray) {
    recipeElement.addEventListener('mouseover', (e) => {
        recipeElement.innerText += ' 🥄';

    });
    recipeElement.addEventListener('mouseleave', (e) => {
        let recipeElementText = recipeElement.innerText.split('');
        recipeElementText.pop()
        recipeElementText.pop()
        recipeElementText.pop()
        recipeElement.innerText = recipeElementText.join('');
    });

    recipeElement.addEventListener('click', (e) => {
        modal.style.display = "block";
        document.getElementById(e.target.getAttribute('id')+'-recipe').style.display = "block";
    });
}