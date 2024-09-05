function guessNumber() {
    let min = 1;
    let max = 100;
    let guess;
    let attempts = 0;
  
    alert("Think of a number between 1 and 100.");
  
    function makeGuess() {
      guess = Math.floor((min + max) / 2);
      attempts++;
  
      const answer = prompt(`My guess is ${guess}. Is it correct? (higher / lower / correct)`);
  
      if (answer === 'higher') {
        min = guess + 1;
        makeGuess();
      } else if (answer === 'lower') {
        max = guess - 1;
        makeGuess();
      } else if (answer === 'correct') {
        alert(`Got it! ${guess} was the correct number. It took ${attempts} attempts.`);
      } else {
        alert("Please respond with 'higher', 'lower', or 'correct'.");
        makeGuess();
      }
    }
  
    makeGuess();
  }
  
  guessNumber();
  
