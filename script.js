let humanScore = 0;
let computerScore = 0;

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const pick = choices[Math.floor(Math.random() * 3)];
  console.log("Computer Choice:", pick);
  return pick;
}

function getHumanChoice() {
  const raw = prompt("Choose one: Rock / Paper / Scissors");
  if (raw == null) return null;                     
  const choice = capitalize(raw.trim());
  const valid = ["Rock", "Paper", "Scissors"];
  if (!valid.includes(choice)) {
    console.log("Invalid Input!");
    return null;
  }
  console.log("Player Choice:", choice);
  return choice;
}

function judge(player, computer) {
  if (player === computer) return "draw";
  const humanWin =
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper");
  return humanWin ? "human" : "computer";
}

function playRound() {
  const human = getHumanChoice();        
  if (!human) return false;              
  const comp = getComputerChoice();

  const result = judge(human, comp);
  if (result === "draw") {
    console.log("Draw");
  } else if (result === "human") {
    humanScore++;
    console.log("Player wins!");
  } else {
    computerScore++;
    console.log("Computer wins!");
  }
  console.log(`Score → Human: ${humanScore}, Computer: ${computerScore}`);
  return true;
}

function playGameFixed5() {
  humanScore = 0; computerScore = 0;
  let rounds = 0;
  while (rounds < 5) {
    const played = playRound();
    if (played) rounds++;               
  }
  console.log("Final Score →",
              `Human: ${humanScore}, Computer: ${computerScore}`);
  console.log(humanScore === computerScore
    ? "Final Result: Draw"
    : (humanScore > computerScore ? "Final Result: Player wins" : "Final Result: Computer wins"));
}


playGameFixed5();

