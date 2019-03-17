/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor (phrase) {
        /* the actual phrase the Phrase object is representing, set to the
        phrase parameter but converted to all lower case */
        this.phrase = phrase.toLowerCase();
    }

    /*  adds letter placeholders to the display when the game starts, each 
    letter represented by an empty box, one li element for each letter. 
    When the player correctly guesses a letter, the empty box is replaced 
    with the matched letter (see the showMatchedLetter method below). The 
    phrase displayed on the screen uses the letter CSS class for letters and
    the space CSS class for spaces */
    addPhraseToDisplay () {
        const phraseUl = document.querySelector('#phrase ul');
        for (let char of this.phrase) {
            const li = document.createElement('li');
            if (char !== ' ') {
                li.className = `hide letter ${char}`;
            } else {
                li.className = 'space';
            }
            li.textContent = char;
            phraseUl.appendChild(li);
        }
    }

    /*  checks to see if the letter selected by the player matches a letter 
    in the phrase */
    checkLetter () {

    }

    /*  reveals the letters on the board that matches the player's selection. 
    To reveal the matching letters select all of the letter DOM elements 
    that have a CSS class name that matches the selected letter and replace 
    each selected elements hide CSS class with the show CSS class */
    showMatchedLetter () {
        
    }
}