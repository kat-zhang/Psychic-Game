var gameLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compThink = gameLetters[Math.floor(Math.random)() gameLetters.length];

.....


var win = 0;
var loss = 0;
var guessCount = 10;
var playerGuess =

var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");
var playerGuess = document.getElementById("player-guess");

document.onkeyup = function (event) {

        var playerPress = event.key;
        if (playerGuess === gameLetters) {
            var compThink = gameLetters[Math.floor(Math.random() * gameLetters.length)];

            if (playerKey === compThink) {
                win++;
            } else {
                loss++,
                guessCount--;
            }

        }   winCount.textContent = 
            lossCount.textContent =
            guessCount.textContent = 
            playerGuess.textContent = "Your guesses so far..." + playerKey;
