
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const array = ["rock", "paper", "scissors"];

function computerPlay() {
	let num = Math.random(1);
	if (num < 1 / 3) {
		return rock;
	} else if (num < 2 / 3) {
		return paper;
	} else {
		return scissors;
	}
}

function playRound(playerSelection, computerSelection) {
	let playerInput = playerSelection.toLowerCase();
	let computerInput = computerSelection.toLowerCase();

	if (playerInput == computerInput) {
		return "Draw! Neither player wins.";
	} else if (playerInput.toLowerCase() == rock) {
		if (computerInput == paper) {
			return "You Lose! Paper beats Rock.";
		} else {
			return "You Win! Rock beats Scissors.";
		}
	} else if (playerInput == paper) {
		if (computerInput == scissors) {
			return "You Lose! Scissors beats Paper.";
		} else {
			return "You Win! Paper beats Rock.";
		}
	} else {
		if (computerInput == rock) {
			return "You Lose! Rock beats Scissors"
		} else {
			return "You Win! Scissors beats Paper."
		}
	}
}

for (let i = 0; i < 5; i++) {
	input = "rock";
	console.log(playRound(input, computerPlay()));
}
