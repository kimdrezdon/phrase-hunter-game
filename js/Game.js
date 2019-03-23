/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* this file is used to create Game class methods for starting and 
ending the game, handling interactions, getting a random phrase,
checking for a win, and removing a life from the scoreboard  */

class Game {
    constructor () {
        /* used to track the number of missed guesses by the player.
        Initial value is 0 since no guesses have been made at the 
        start of the game */
        this.missed = 0;
        /* an array of 5 Phrase objects to use with the game. A phrase
        should only include letters and spaces, no numbers punctuation
        or special characters */
        this.phrases = this.createPhrases();
        /* this si the Phrase object that's currently in play. The 
        initial value is null. Within the startGame method, this 
        property will be set to the Phrase object returned from a call
        to the getRandomPhrase method */
        this.activePhrase = null;
    }
    
    /**
     * creates phrases array 
     * @return {array} An array of phrase that could be used in the game
    */
    createPhrases() {
        const array =  ['Batteries Not Included', 
                        'Early in the Morning',
                        'Once in a Blue Moon',
                        'Down by the River',
                        'Winter is Coming'];
        return array;
    }
    
    /** hides the start screen overlay, calls the getRandomPhrase
     * method and sets the activePhrase property with the chosen phrase.
     * Adds that phrase to the board by calling the addPhraseToDisplay
     * method on the active Phrase object
    */
    startGame () {
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /** randomly retrieves one of the phrases stored in the phrases 
     * array and returns it 
     * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase () {
        const randomNum = Math.floor(Math.random()*5);
        return new Phrase(this.phrases[randomNum]);
    }

    /** controls most of the game logic 
     * 1) Captures the clicked/chosen letter
     * 2) Checks to see if the letter clicked by the player matches a 
     *    letter in the phrase and then directs the game based on the 
     *    correct or incorrect guess. 
     * 3) Disables the selected letter's onscreen keyboard button 
     * 4) If the phrase does not include the guessed letter, adds the
     *    wrong CSS class to the selected letter's keyboard button and calls
     *    the removeLife method
     * 5) If the phrase includes the guessed letter, adds the chosen CSS 
     *    class to the selected letter's keyboard button, calls the 
     *    showMatchedLetter method on the phrase and then calls the
     *    checkForWin method. If the player has won the game also calls the 
     *    gameOver method  
    */
    handleInteraction (e) {
        const selectedLetter = e.target.textContent;
        e.target.setAttribute('disabled', 'disabled');
        if (this.activePhrase.checkLetter(selectedLetter)) {
            e.target.classList.add('chosen');
            this.activePhrase.showMatchedLetter(selectedLetter);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            e.target.classList.add('wrong');
            this.removeLife();
        }
    }

    /**  
     * removes a life from the scoreboard by replacing one of the 
     * liveHeart images with a lostHeart image and increments the missed
     * property. If the player has five missed guesses then end the game
     * by calling the gameOver method 
     * 
    */
    removeLife () {
        const scoreboard = document.querySelectorAll('.tries img');
        scoreboard[this.missed].src = 'images/lostHeart.png'
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    /** 
     * checks to see if the player has revealed all the letters in the 
     * active phrase
     * @return {boolean} True if game has been won, false if game wasn't won 
    */
    checkForWin () {
        const unmatchedLetters = document.getElementsByClassName('hide');
        if (unmatchedLetters.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    /** 
     * displays the original start screen overlay and depending on the 
     * outcome of the game, updates the overlay h1 element with a friendly
     * win or loss message, and replaces the overlay's start CSS class with 
     * either the win or lose CSS class 
     * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver (gameWon) {
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.display = 'flex';
        
        const gameOverMessage = document.querySelector('#game-over-message');
        if (gameWon) {
            gameOverMessage.textContent = 'You guessed the phrase, congratulations!'
            overlayDiv.classList.replace('start', 'win');
        } else {
            gameOverMessage.textContent = 'You did not guess the phrase, please try again!'
            overlayDiv.classList.replace('start', 'lose');
        }

        this.gameReset();
    }
       
    /* After a game is completed the gameboard needs to be reset so 
    that clicking the Start Game button will successfully load a new
    game.
    1) Remove all li elements from the Phrase ul element
    2) Enable all of the onscreen keyboard buttons and update each 
    to use the key CSS class and not sue the chosen or wrong CSS
    classes
    3) Reset all of the heart images (ie: the players lives) in the
    scoreboard at the bottom of the gameboard to display the 
    liveHeart image */
    gameReset () { 
        this.missed = 0;
        
        const phraseUl = document.querySelector('#phrase ul');
        //found on MDN
        while (phraseUl.firstChild) {
            phraseUl.removeChild(phraseUl.firstChild);
        }
        
        const keyboardButtons = document.querySelectorAll('.key')
        keyboardButtons.forEach(button => {
            if (button.getAttribute('disabled')) {
                button.removeAttribute('disabled');
            }
            button.classList.remove('wrong', 'chosen');
        });
        
        const scoreboard = document.querySelectorAll('.tries img');
        scoreboard.forEach(img => img.src = 'images/liveHeart.png');
    }
}