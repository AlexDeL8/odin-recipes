'use strict'

document.addEventListener('DOMContentLoaded', addListeners())

function addListeners() {
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

        });
    }
}