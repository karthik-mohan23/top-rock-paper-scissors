"use strict";

let playerScore = 0;
let computerScore = 0;

// function that will return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  let randomIndexNumber = Math.floor(Math.random() * computerChoices.length);
  let randomComputerChoice = computerChoices[randomIndexNumber];
  return randomComputerChoice;
}

let playerChoice = prompt(
  "Let's play rock, paper, scissors! Please type 'rock', 'paper', or 'scissors' to make your choice."
);

// function that plays a single round of Rock Paper Scissors.
function playRound(computerSelection, playerSelection) {
  console.log(computerSelection);
  playerSelection = playerChoice.toLowerCase();
  console.log(playerSelection);
  if (computerSelection === playerSelection) {
    console.log("It's a draw");
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log("Congrats! You won.");
      playerScore++;
    } else {
      console.log("You lost against the computer. Try again.");
      computerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("Congrats! You won.");
      playerScore++;
    } else {
      console.log("You lost against the computer. Try again.");
      computerScore++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      console.log("Congrats! You won.");
      playerScore++;
    } else {
      console.log("You lost against the computer. Try again.");
      computerScore++;
    }
  } else {
    alert("Invalid choice. Try again.");
  }
}
function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    playRound(getComputerChoice(), playerChoice);
  }
  if (playerScore === computerScore) {
    console.log("The scores are tied.");
  } else if (playerScore > computerScore) {
    console.log(
      `You scored ${playerScore} points and Computer scored ${computerScore} points. You won!`
    );
  } else {
    console.log(
      `You scored ${playerScore} points and Computer scored ${computerScore} points. Computer won!`
    );
  }
}
game(5);
