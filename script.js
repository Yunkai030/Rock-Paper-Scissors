let humanScore = 0;
let computerScore = 0;

const playerChoice = document.createElement("p");
 
const computerChoice = document.createElement("p");
const resultScore = document.createElement("p");
const scoreBoard = document.createElement("p");

const divScore = document.querySelector("#result");

divScore.appendChild(playerChoice);
divScore.appendChild(computerChoice);
divScore.appendChild(resultScore);
divScore.appendChild(scoreBoard);

const buttonPaper = document.querySelector("#buttonPaper");
const buttonRock = document.querySelector("#buttonRock");
const buttonScissors = document.querySelector("#buttonScissors");


buttonPaper.addEventListener("click", () => playRound("Paper"));
buttonRock.addEventListener("click", () => playRound("Rock"));
buttonScissors.addEventListener("click", () => playRound("Scissors"));

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const pick = choices[Math.floor(Math.random() * 3)];
  computerChoice.textContent = "Computer's Choice: " + pick;
  return pick;
}


function getHumanChoice(result) {
  playerChoice.textContent = "Player's Choice: " + result;
  return result;
}

function judge(player, computer) {
  if (player === computer) return "draw";
  const humanWin =
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper");
  return humanWin ? "human" : "computer";
}


function playRound(human) {
  // human to get the user input
  getHumanChoice(human);

  const comp = getComputerChoice();
  const result = judge(human, comp);

  if (result === "draw") {
    resultScore.textContent = "Game Result: " + "Draw!";
  } else if (result === "human") {
    humanScore++;
    resultScore.textContent = "Game Result: " +"Player wins!";
  } else {
    computerScore++;
    resultScore.textContent = "Game Result: " +"Computer wins!";
  }

  scoreBoard.textContent = `Overall Score → Player: ${humanScore}, Computer: ${computerScore}`;
}


