let numOfRounds = 5;

//Picks Random Choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        return "Rock";
    } else if (randomNum == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//Takes Human Choice
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    if (humanChoice.toLowerCase() === "rock") {
        return "Rock";
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper";
    } else if (humanChoice.toLowerCase() == "scissors") {
        return "Scissors";
    }
    return "Invalid Value. Pick either 'Rock', 'Paper', or 'Scissors'";
}

//Plays a Round of Rock, Paper, Scissors
function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        console.log(`Draw! ${humanChoice} equals ${computerChoice}.`);
        return 0;
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || 
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
        return 1;
    } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
        return -1;
    }
}

//Plays 5 Rounds of RPS and declares a Winner After 5 Rounds!
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < numOfRounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const currRound = playRound(humanChoice, computerChoice);
        if (currRound === -1) {
            computerScore++;
        } else if (currRound === 1) {
            humanScore++;
        }
    }
    if (humanScore === computerScore) {
        console.log(`Draw!`);
    } else if (humanScore > computerScore) {
        console.log(`Player Wins!`);
    } else {
        console.log(`Computer Wins!`);
    }
}

//Starts the Game
playGame();