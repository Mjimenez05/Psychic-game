// need to display the wins, losses, guesses counter and letters guessed without key press to start
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];


var wins = 0;
var losses = 0;
var guesses = 10;


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice)

document.onkeypress = function(event) {
    var userGuess = event.key;

    if (userGuess === computerChoice) {
        wins++;
    }
    // need a reset for when a win is achieved to set the guesses back to 10 without a page refresh
    else {
        guesses--;
    }
    // need a reset for when a loss occurs to set the guesses back to ten without a page refresh
    if (guesses === 0) {
        losses++
    }

    // need user all user guesses displayed in a list until guess count is zero 
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('userGuess').innerHTML = "Your guesses:" + userGuess;
}

// I ran into trouble with this assignment. I really got some more clearity today on some of the functions.
// I need to work on the reset functions and displaying the keystroke in a list
// I have tutoring getting set up for me to further understand java and jquery, as well as staying for TA sessions before and after class.