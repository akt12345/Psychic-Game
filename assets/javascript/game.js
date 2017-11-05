
// Creates an array that lists out all of the options (Letter computer id thinking of). do i chose letter?
    var computerChoices = ["c", "a", "t"];

    // Creating variables to hold the number of wins, losses, guesses left and Your guesses so far. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSofar = [];

// Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log ("This is the computerGuess " + computerGuess)

    // This function is run whenever the user presses a key.
     document.onkeyup = function(event) {
    console.log (guessesSofar)
      // Determines which key was pressed.
      var userGuess = event.key;
      console.log (userGuess)
      console.log (computerGuess)
      // Reworked our code from last step to use "else if" instead of lots of if statements.
      if (userGuess === computerGuess){
      wins = wins +1
      console.log (wins)
      }

      else if (userGuess !== computerGuess && guessesLeft > 0){
      guessesLeft = guessesLeft -1
      guessesSofar.push(userGuess)
      }
       console.log (guessesSofar)
      // This logic determines the outcome of the game (win/loss/guesses left, guesses so far), and increments the appropriate number
      /*if ((userGuess === "c") || (userGuess === "a") || (userGuess === "t")) {

        if ((userGuess === "r") && (computerGuess === "s")) {
          wins++;
        } else if ((userGuess === "r") && (computerGuess === "p")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "r")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "p")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "r")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "s")) {
          losses++;
        } else if (userGuess === computerGuess) {
          ties++;
        }
        */
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/guesses left/ your guesses so far
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>guesses left: " + guessesLeft + "</p>";
          "<p>guesses left: " + guessesSofar + "</p>";
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
    //*};
