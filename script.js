let randomNumber = Math.round(Math.random() * 100 + 1);

const userGuess = document.querySelector("#user-guess");
const submitBtn = document.querySelector("#submit");
const restartBtn = document.querySelector(".restart");
const hintMessage = document.querySelector(".hints");
const remainingGuess = document.querySelector(".guess__amount");
const previousGuesses = document.querySelector(".previous__guess");

let playGame = true;
let guessRemain = 10;
let guessArr = []
userGuess.focus()

remainingGuess.innerHTML = `Remaining Guesses : ${guessRemain}`;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (playGame) {
    guess = parseInt(userGuess.value);
    checkGuessValue(guess);
    userGuess.value = ''
    if(window.innerWidth >= 600){
      userGuess.focus()
    } else{
      userGuess.blur()
    }
  }
});

function checkGuessValue(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid guess");
  } else if (guess < 1) {
    alert("Please guess a number greater than 0");
  } else if (guess > 100) {
    alert("Please guess a number lower than 100");
  } else {
    if (guessRemain > 0) {
      displayGuessResult();
      guessArray(guess);
      if(guessRemain === 0){
        endGame();
      }
    } else {
      endGame()
    }
  }
}

function displayGuessResult() {
  if (guess === randomNumber) {
    hintMessage.innerHTML = `You guessed it RIGHT the number is ${randomNumber}.`;
    endGame();
  } else if (guess > randomNumber) {
    hintMessage.innerHTML = `You guessed GREATER than the actual number`;
  } else if (guess < randomNumber) {
    hintMessage.innerHTML = `You guessed LOWER than the actual number`;
  }
}

function guessesRemaining() {
  guessRemain--;
  remainingGuess.innerHTML = `Remaining Guesses : ${guessRemain}`;
}

function displayPreviousGuesses(){
  previousGuesses.innerHTML += ` ${guess},`
}

function endGame() {
  userGuess.value = "";
  userGuess.setAttribute("disabled", "");
  playGame = false;
  submitBtn.setAttribute('disabled', '');
  newGame();
}

function newGame() {
  restartBtn.style.display = "block";
  restartBtn.addEventListener("click", function () {
    // location.reload();
    reloadGame()
  });
}

function guessArray(guess){
  if(guessArr.includes(guess)){
    alert('you already guess this number')
  } else {
    guessArr.push(guess)
    guessesRemaining();
    displayPreviousGuesses()
  }
  // console.log(guessArr)
}


function reloadGame(){
  randomNumber = Math.round(Math.random() * 100 + 1);
  playGame = true
  userGuess.removeAttribute('disabled');
  if(window.innerWidth >= 600){
    userGuess.focus()
  } else{
    userGuess.blur()
  }
  hintMessage.innerHTML = ''
  guessRemain = 10
  remainingGuess.innerHTML = `Remaining Guesses : ${guessRemain}`;
  previousGuesses.innerHTML = 'Previous Guesses :'
  guessArr = []
  submitBtn.removeAttribute('disabled');
  // console.log(guessArr)
  // console.log(randomNumber); 
  restartBtn.style.display = 'none'
}


// console.log(randomNumber);