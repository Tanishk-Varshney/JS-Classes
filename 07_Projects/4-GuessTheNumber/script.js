let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");
const guessSlot = document.getElementsByClassName("guesses");
const remaining = document.getElementsByClassName("lastResult");
const lowOrHigh = document.getElementsByClassName("lowOrHi");
const startOver = document.getElementsByClassName("resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1) {
    alert("Please enter a number more than 1.");
  } else if (guess > 100) {
    alert("Please enter a number less than 100.");
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    if (numGuess === 11) {
      displayMessage(`Game Over, Random number is ${guess}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Win`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`${guess} is smaller`);
  } else {
    displayMessage(`${guess} is Higher`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
  const gameButton = document.querySelector("#newGame");
  gameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    displayMessage("");
    userInput.removeAttribute("disabled");
    startOver.removeChild("p");
    playGame = true;
  });
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");

  p.classList.add("button");
  p.innerHTML = `<h2 className="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
