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
        this.phrases = [];
        /* this si the Phrase object that's currently in play. The 
        initial value is null. Within the startGame method, this 
        property will be set to the Phrase object returned from a call
        to the getRandomPhrase method */
        this.activePhrase = null;
    }

    /* hides the start screen overlay, calls the getRandomPhrase 
    method and sets the activePhrase property with the chosen phrase.
    Addes that phrase to the board by calling the addPhraseToDisplay 
    method ont eh active Phrase object*/
    startGame () {

    }

    /* randomly retrieves one of the phrases stored in the phrases 
    array and returns it */
    getRandomPhrase () {

    }

    /* controls most of the game logice. Checks to see if the button 
    clicked by the player matches a letter in the phrase and then 
    directs the game based on the correct or incorrect guess. 
    1) Disables the selected letter's onscreen keyboard button 
    2) If the phrase does not include the guessed letter, adds the
    wrong CSS class to the selected letter's keyboard button and calls
    the removeLife method
    3) If the phrase includes the guessed letter, adds the chosen CSS 
    class to the selected letter's keyboard button, calls the 
    showMatchedLetter method on the phrase and then calls the
    checkForWin method. If the player has won the game also calls the 
    gameOver method  */
    handleInteraction () {

    }

    /* removes a life from the scoreboard by replacing one of the 
    liveHeart images with a lostHeart image and increments the missed
    property. If the player has five missed guesses then end the game
    by calling the gameOver method */
    removeLife () {

    }

    /* checks to see if the player has revealed all the letters in the 
    active phrase */
    checkForWin () {

    }

    /* displays the original start screen overlay and depending on the 
    outcome of the game, updates the overlay h1 element with a friendly
    win or loss message, and replaces the overlay's start CSS class with 
    either the win or lose CSS class */
    gameOver () {
        
    }
}