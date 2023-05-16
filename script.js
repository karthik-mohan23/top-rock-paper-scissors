"use strict";

// setting initial scores of both players to zero.
let playerScore = 0;
let computerScore = 0;

// to display live score of players.
let computerLiveScore = document.querySelector(".computer-score");
let playerLiveScore = document.querySelector(".player-score");

// to display the current moves of the players live.
let liveComputerResult = document.querySelector(".live-computer-result");
let livePlayerResult = document.querySelector(".live-player-result");

// to display live result based on the players moves.
const liveResult = document.querySelector(".live-text");

// to remove the text after the game finishes.
let choseWeaponText = document.querySelector(".chose-weapon");

// to display the final result of the game
let finalResult = document.querySelector(".final-result-text");

// function that will return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  let randomIndexNumber = Math.floor(Math.random() * computerChoices.length);
  let randomComputerChoice = computerChoices[randomIndexNumber];
  return randomComputerChoice;
}

// function that plays a single round of Rock Paper Scissors.
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    liveResult.textContent = "It's a tie.";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      liveResult.textContent = "You won.";
      playerScore++;
      playerLiveScore.textContent = playerScore;
    } else {
      liveResult.textContent = "You lost.";
      computerScore++;
      computerLiveScore.textContent = computerScore;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      liveResult.textContent = "You won.";
      playerScore++;
      playerLiveScore.textContent = playerScore;
    } else {
      liveResult.textContent = "You lost.";
      computerScore++;
      computerLiveScore.textContent = computerScore;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      liveResult.textContent = "You won.";
      playerScore++;
      playerLiveScore.textContent = playerScore;
    } else {
      liveResult.textContent = "You lost.";
      computerScore++;
      computerLiveScore.textContent = computerScore;
    }
  }
}

// function to display the final result.
function game(playerScore, computerScore) {
  if (playerScore == 5) {
    finalResult.textContent = "Congrats😀! You won.";
    choseWeaponText.textContent = "";
  } else if (computerScore == 5) {
    finalResult.textContent = "You lost 🙁. Try again.";
    choseWeaponText.textContent = "";
  }
}

// function to disable buttons
function disableButtons() {
  const rockBtn = document.querySelector(".rock");
  const paperBtn = document.querySelector(".paper");
  const scissorsBtn = document.querySelector(".scissors");
  rockBtn.classList.add("disabled");
  paperBtn.classList.add("disabled");
  scissorsBtn.classList.add("disabled");
}

// selecting all weapon div's.
const weapons = document.querySelectorAll(".weapon");
// adding event listeners on each div.
weapons.forEach((weapon) => {
  weapon.addEventListener("click", () => {
    if (weapon.classList.contains("rock")) {
      // computer choice
      let computerSelection = getComputerChoice();
      liveComputerResult.textContent = `Computer chose ${computerSelection}.`;
      // player choice
      let playerSelection = "rock";
      livePlayerResult.textContent = `Player chose ${playerSelection}.`;
      playRound(computerSelection, playerSelection);
      game(playerScore, computerScore);
      //to disable click events when either of the players scores 5 points.
      if (playerScore == 5 || computerScore == 5) {
        disableButtons();
      }
    } else if (weapon.classList.contains("paper")) {
      // computer choice
      let computerSelection = getComputerChoice();
      liveComputerResult.textContent = `Computer chose ${computerSelection}.`;
      // player choice
      let playerSelection = "paper";
      livePlayerResult.textContent = `Player chose ${playerSelection}.`;
      playRound(computerSelection, playerSelection);
      game(playerScore, computerScore);
      //to disable click events when either of the players scores 5 points.
      if (playerScore == 5 || computerScore == 5) {
        disableButtons();
      }
    } else {
      // computer choice
      let computerSelection = getComputerChoice();
      liveComputerResult.textContent = `Computer chose ${computerSelection}.`;
      // player choice
      let playerSelection = "scissors";
      livePlayerResult.textContent = `Player chose ${playerSelection}.`;
      playRound(computerSelection, playerSelection);
      game(playerScore, computerScore);
      //to disable click events when either of the players scores 5 points.
      if (playerScore == 5 || computerScore == 5) {
        disableButtons();
      }
    }
  });
});
