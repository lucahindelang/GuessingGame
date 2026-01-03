let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;
let guessed = 0;

function guessTheNumber() {

    if(guessed == 1) {
        tries = 0;
        guessed = 0;
    }
    
    if(numberToGuess < numberInput.value) {
        headline.innerHTML = "Die Zahl ist kleiner.";
    }
    
    if(numberToGuess > numberInput.value) {
        headline.innerHTML = "Die Zahl ist größer.";
    }
    
    if(numberToGuess == numberInput.value) {
        headline.innerHTML = "Du hast gewonnen und die Zahl " +numberToGuess+ " erraten!";
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        guessed = 1;
    }

    tries++;
    displayTries.innerHTML = 'Versuche: '+ tries;
    numberInput.value = '';
}