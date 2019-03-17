/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* create a new instance of the Game class */
const game = new Game;

/* add a click event listener to the Start Game button which
creates a new Game object and starts the game by calling the 
startGame method */

/* add click event listeners to each of the onscreen keyboard 
buttons so that clicking a button calls the handleInteraction
method on the Game object. Event delegation can also be used 
in order to avoid having to add an event listener to each 
individual keyboard button. Clicking the space between and 
around the onscreen keyboard buttons should not result in the 
handleInteraction method being called */

/* After a game is completed the gameboard needs to be reset so 
that clicking the Start Game button will successfully load a new
game.
1) Remove all li elements from the Phrase ul element
2) Enable all of the onscreen keyboard buttons and update each 
to use the key CSS class and not sue the chosen or wrong CSS
classes
3) Reset all of the heart images (ie: the players lives) in the
scoreboard at the bottom of the gameboard to display the liveHeart
image */

const phrase1 = new Phrase('Pork Chop');

phrase1.addPhraseToDisplay();

