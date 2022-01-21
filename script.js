'use strict'

let modal = document.getElementById('recipe-modal')
window.onclick = function(event) {
    if (event.target == modal) modal.style.display = "none";
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
        switch (e.target.getAttribute('id')) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                console.log('ERROR - Modal selection NOT valid')
        }
    });
}