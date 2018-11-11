var compLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessList = []
var wins = 0;
var losses = 0;
var guessRemain = 10;

var guessLog = document.getElementById("player-guess");
var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");
var guessLess = document.getElementById("guess-count");

document.onkeyup = function(event) {

    var playerKey = event.key;
    console.log("Guess",playerKey);

    var compThink = compLetters[Math.floor(Math.random() * compLetters.length)];
    console.log("Computer",compThink);

    if (playerKey === compThink) {
        wins++;
        guessRemain=10;
        winCount.textContent = "Wins:" + wins;
        guessLess.textContent = "Guesses remaining: " + guessRemain;
        console.log("WIN COUNT", wins);
        console.log("RESET GUESSES", guessRemain);
        }   else if (playerKey !== compThink) {
            guessRemain--;
            guessLess.textContent = "Guesses remaining:" + guessRemain;
            console.log("GUESSES REMAINING",guessRemain);
    
        }
    
        if (guessRemain < 1 ) {
            losses++;
            guessRemain=10;
            guessLess.textContent = "Guesses remaining:" + guessRemain;
            lossCount.textContent = "Losses " + losses;
            console.log("LOSE TOTAL", losses);
            console.log("RESET GUESSES", guessRemain); 
    
        }  
            


            guessList.push(event.key );
            guessLog.textContent = "Your guesses so far: " + guessList;
            winCount.textContent = "Wins: " + wins;
            lossCount.textContent = "Losses: " + losses;
            guessLess.textContent = "Guesses remaining: " + guessRemain;


    

    
   };