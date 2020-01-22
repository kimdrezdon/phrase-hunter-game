class Game {
    constructor() {
        /** Tracks the number of missed guesses by the player. */
        this.missed = 0;
        /** Calls the createPhrases method to return an array */
        this.phrases = this.createPhrases();
        /** The Phrase object that's currently in play */
        this.activePhrase = null;
        /** Tracks phrases used to prevent repeating phrases */
        this.randomUsed = [];
    }

    /**
     * Creates an array of phrases. 
     * @return {array} An array of phrase that could be used in the game
    */
    createPhrases() {
        const array = [
            'Batteries Not Included',
            'Once in a Blue Moon',
            'Down by the River',
            'Winter is Coming',
            'Beach Bum',
            'Sun is Shining'
        ];
        return array;
    }

    /** 
     * Called when the start button is clicked. Hides the overlay div.
     * Sets the activePhrase property to the phrase returned by the 
     * getRandomPhrase method. Calls the addPhraseToDisplay method on 
     * the activePhrase object.
    */
    startGame() {
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /** 
     * Retrieves one of the phrases stored in the phrases array using 
     * a random number.
     * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * this.phrases.length);
        } while (this.randomUsed.indexOf(randomNum) >= 0);
        this.randomUsed.push(randomNum);
        if (this.randomUsed.length === this.phrases.length) {
            this.randomUsed = [randomNum];
        }
        return new Phrase(this.phrases[randomNum]);
    }

    /** 
     * Receives as an arguement the button passed from the click or keyup event listener.
     * Collects the selected letter. Disables the button. Calls the checkLetter method,
     * passing the selected letter. If the letter is in the phrase, the chosen class is 
     * added to the button, the showMatchedLetter method is called to reveal all matching 
     * letters in the phrase, calls the checkForWin method and if the user has won, the 
     * gameOver method is called. If the letters is NOT in the phrase, the wrong class
     * is added to the button, and the removeLife method is called to remove a life. 
     * @param {element} button - The user's selected button via click or keyup event listener 
    */
    handleInteraction(button) {
        const selectedLetter = button.textContent;
        button.setAttribute('disabled', 'disabled');
        if (this.activePhrase.checkLetter(selectedLetter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(selectedLetter);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    /**  
     * Removes a life from the scoreboard by replacing the leftmost life heart
     * with a lost heart. The missed property is increased by one. If the missed
     * property reaches 5, the gameOver method is called to end the game with a loss.
    */
    removeLife() {
        const scoreboard = document.querySelectorAll('.tries img');
        scoreboard[this.missed].src = 'images/lostHeart.png'
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    /** 
     * Checks to see if the player has revealed all the letters in the active phrase
     * by checking if there are any remaining li elements with a class of hide.
     * @return {boolean} True if game has been won, false if game wasn't won 
    */
    checkForWin() {
        const unmatchedLetters = document.getElementsByClassName('hide');
        if (unmatchedLetters.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    /** 
     * Displays the overlay div. Replaces the overlay's class with win or lose, and 
     * updates the overlay's message based on the outcome of the game. Calls the 
     * gameReset method. 
     * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlayDiv = document.querySelector('#overlay');
        overlayDiv.style.display = 'flex';

        const gameOverMessage = document.querySelector('#game-over-message');
        if (gameWon) {
            gameOverMessage.textContent = 'You guessed the phrase, congratulations!'
            overlayDiv.className = 'win';
        } else {
            gameOverMessage.textContent = 'You did not guess the phrase, please try again!'
            overlayDiv.className = 'lose';
        }

        this.gameReset();
    }

    /** 
     * Resets the gameboard after a game is completed. Resets the missed property 
     * back to 0. Removes all li elements from the phrase ul element. Re-enables 
     * all of the onscreen keyboard buttons and removes any wrong or chosen classes 
     * from the buttons. Changes all of the lost heart images back to life hearts.
    */
    gameReset() {
        this.missed = 0;

        const phraseUl = document.querySelector('#phrase ul');
        while (phraseUl.firstChild) {
            phraseUl.removeChild(phraseUl.firstChild);
        }

        const keyboardButtons = document.querySelectorAll('.key')
        keyboardButtons.forEach(button => {
            if (button.hasAttribute('disabled')) {
                button.removeAttribute('disabled');
            }
            button.classList.remove('wrong', 'chosen');
        });

        const scoreboard = document.querySelectorAll('.tries img');
        scoreboard.forEach(img => img.src = 'images/lifeHeart.png');
    }
}