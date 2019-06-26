# techdegree-project-4: OOP Game Show App

This project is a browser-based phrase guessing game, using JavaScript and Object-Oriented Programming. 

On page load, the start overlay screen is displayed with a Start Game button. 
After clicking the Start Game button, the overlay is hidden and the gameboard is revealed. 
The gameboard consists of a hidden phrase, an onscreen keyboard and a scoreboard of 5 life triangles. 
The phrase div is populated with a random phrase and each letter is represented by an empty black box. 

The user guesses a letter by either clicking on the onscreen keyboard or by pressing the selected letter on their computer's physical keyboard. 
The button associated with that selected letter is disabled and the letter is checked against the phrase for a match. 

If the selected letter matches a letter in the phrase, the button of the selected letter is colored green, and the matching letter(s) in the phrase are revealed in green. 

If the selected letter does not match a letter in the phrase, the button of the selected letter is colored pink, and one of the 5 life hearts is removed and replaced with a lost heart.

The player keeps guessing until either they guess all the letters and the winning game overlay appears, or they use up all 5 of their lives and the losing game overlay appears. 

Each time the game over overlay appears, the gameboard is reset so that clicking the Start Game button always loads a new gameboard.