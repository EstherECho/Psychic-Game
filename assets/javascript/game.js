var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var guessesLeft= 9;
var targetLetter = " ";
var guesses = " ";

const sound = new Audio();

function clearReset() {
    document.querySelector("#guesses-sofar").innerHTML = "Guesses so far: ";
    document.querySelector("#guesses-left").innerHTML = "Guesses left: 9";
    guessesLeft = 9;
    guesses = "";
}

function renderLetter() {
    var letterIndex = Math.floor(Math.random()*26);
    targetLetter= letters[letterIndex];
}

function renderNewLetter() {
    targetLetter = "";
    var letterIndex = Math.floor(Math.random()*26);
    targetLetter= letters[letterIndex];
}

// function playSound () {
//     sound.src = "/assets/images/Jeopardy-theme-song.mp3";
//     sound.play();
// }

renderLetter();
console.log(targetLetter);

document.onkeyup = function(event) {
    // playSound();
    var userGuess = event.key.toUpperCase();

    if (userGuess === targetLetter) {
        alert("You're psychic! You guessed "  + userGuess + "." + " Your guess is correct, you win!");
        wins++;
        updateWins();
        clearReset();
        renderNewLetter();
        console.log(targetLetter);
        } 
        
        else if (guessesLeft >= 1) {
            guessesLeft--;
            updateGuessesLeft();
            updateLosses();
            guesses+=userGuess;
            document.querySelector("#guesses-sofar").innerHTML = "Guesses so far: " + guesses;
        }

        else {
            alert("You ran out of guesses. You lose.");
            losses++;
            updateLosses();
            clearReset();
        }
    }

function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
} 

function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

function updateGuessesLeft() {
    document.querySelector("#guesses-left").innerHTML = "Guesses left: " + guessesLeft;
}
