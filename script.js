const choices = ["rock", "paper", "scissors"];
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const resultElement = document.querySelector("#round-result");
const choiceButtons = document.querySelectorAll(".choice");
const resetButton = document.querySelector("#reset-button");

const scores = {
  player: 0,
  computer: 0,
};

const beats = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let outcome;
  let outcomeClass;

  if (playerChoice === computerChoice) {
    outcome = "It's a tie!";
    outcomeClass = "tie";
  } else if (beats[playerChoice] === computerChoice) {
    scores.player += 1;
    outcome = "You win this round!";
    outcomeClass = "win";
  } else {
    scores.computer += 1;
    outcome = "Computer wins this round.";
    outcomeClass = "loss";
  }

  playerScoreElement.textContent = scores.player;
  computerScoreElement.textContent = scores.computer;
  resultElement.innerHTML = `<strong class="${outcomeClass}">${outcome}</strong><br>You chose ${playerChoice}; computer chose ${computerChoice}.`;
}

function resetGame() {
  scores.player = 0;
  scores.computer = 0;
  playerScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
  resultElement.textContent = "Pick a hand to play your first round.";
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.dataset.choice));
});

resetButton.addEventListener("click", resetGame);
