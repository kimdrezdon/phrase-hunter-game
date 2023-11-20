let game;
const startButton = document.querySelector('#btn__reset');
const keyboardDiv = document.querySelector('#qwerty');
const keyboardButtons = document.querySelectorAll('.key');
const overlayDiv = document.querySelector('#overlay');

/**
 * Adds a click event listener to the Start Game button which
 * creates a new Game object and starts the game by calling the
 * startGame method.
 */
startButton.addEventListener('click', () => {
	game = new Game();
	game.startGame();
});

/**
 * Adds a click event listener to the the onscreen keyboard
 * div so that clicking a keyboard button inside the div calls
 * the handleInteraction method on the Game object.
 */
keyboardDiv.addEventListener('click', e => {
	if (e.target.className === 'key') {
		game.handleInteraction(e.target);
	}
});

/**
 * Adds a keyup event listener to the document so that pressing
 * a letter key, only while the overlay is not visible, will trigger
 * the associated onscreen keyboard button, and calls the handleInteraction
 * method on the Game object.
 */
document.addEventListener('keyup', e => {
	if (overlayDiv.style.display === 'none') {
		let letter = e.code[3];
		if (letter >= 'A' && letter <= 'Z') {
			for (let i = 0; i < keyboardButtons.length; i++) {
				if (
					keyboardButtons[i].textContent === letter &&
					!keyboardButtons[i].hasAttribute('disabled')
				) {
					let selectedButton = keyboardButtons[i];
					game.handleInteraction(selectedButton);
					break;
				}
			}
		}
	}
});
