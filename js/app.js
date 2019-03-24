/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* this file is used to create a new instance of the Game class
and add event listeners for the start button and onscreen 
keyboard buttons */

let game;

/* add a click event listener to the Start Game button which
creates a new Game object and starts the game by calling the 
startGame method */
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => {
    game = new Game;
    game.startGame();
});


/* add click event listeners to each of the onscreen keyboard 
buttons so that clicking a button calls the handleInteraction
method on the Game object. Event delegation can also be used 
in order to avoid having to add an event listener to each 
individual keyboard button. Clicking the space between and 
around the onscreen keyboard buttons should not result in the 
handleInteraction method being called */
const keyboardDiv = document.querySelector('#qwerty');
keyboardDiv.addEventListener('click', (e) => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
});

const keyboardButtons = document.querySelectorAll('.key');
document.addEventListener('keyup', (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        var letter = String.fromCharCode(e.keyCode).toLowerCase();
        for (let i = 0; i < keyboardButtons.length; i++) {
            if (keyboardButtons[i].textContent === letter) {
                const selectedButton = keyboardButtons[i];
                game.handleInteraction(selectedButton);
                break;
            }
        }
    }
});