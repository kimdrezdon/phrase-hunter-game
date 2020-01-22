class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toUpperCase();
    }

    /** 
     * Adds one li element for each letter or space of the active phrase, 
     * displaying one empty box per letter on the screen when the game starts.
     * The letter class is applied to letters and the space class is applied 
     * to spaces.
    */
    addPhraseToDisplay() {
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

    /**
     *  Checks to see if the letter selected by the player matches a letter 
     *  in the phrase.
     *  @param (string) letter - Letter to check
     *  @return {boolean} True if selected letter is in phrase, false if not 
    */
    checkLetter(letter) {
        if (this.phrase.indexOf(letter) >= 0) {
            return true;
        } else {
            return false;
        }
    }

    /** 
     * Reveals the letters on the board that match the player's selected letter 
     * by selecting all li elements with the class name of that letter and 
     * replacing the hide class with the show class.
     *  @param (string) letter - Letter to check
    */
    showMatchedLetter(letter) {
        const matchedLis = document.getElementsByClassName(letter);
        for (let li of matchedLis) {
            li.classList.replace('hide', 'show');
        }
    }
}