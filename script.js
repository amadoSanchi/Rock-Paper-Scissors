
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const text = document.querySelector("p");
const span = document.querySelector("span");

buttons.forEach(button => button.addEventListener("click", playingGame));

function playingGame(event) {
    
    span.removeAttribute("hidden");
    playRound(event.target.textContent, getComputerChoice());

    if (humanScore === 5 || computerScore === 5) {
        playFinish();
        buttons.forEach(button => button.removeEventListener("click", playingGame));
    }
    
}

function playRound(humanChoice, computerChoice) {
    
    if (
        (humanChoice === "Rock" && computerChoice === "Rock") ||
        (humanChoice === "Paper" && computerChoice === "Paper") ||
        (humanChoice === "Scissors" && computerChoice === "Scissors")) {

        text.textContent = "And the winner is... Well, what do you know, it was a tie!";

    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")) {
        
        text.textContent = "And the winner is... You!";
        humanScore++;

    } else if (
        (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Paper" && humanChoice === "Rock") ||
        (computerChoice === "Scissors" && humanChoice === "Paper")) {
        
        text.textContent = "And the winner is... the computer!";
        computerScore++;
    }

    span.textContent = `\n Human: ${humanScore}\n Computer: ${computerScore}`;
}

function playFinish() {
    
    text.style.color = "red";

    if (humanScore > computerScore) {
        text.textContent = "And the FINAL winner is... YOU! You won with a score of " + humanScore + "/5!"
    } else if (humanScore < computerScore) {
        text.textContent = "And the FINAL winner is... the COMPUTER! You lost with a score of " + humanScore + "/5!"
    } else {
        text.textContent = "And the FINAL winner is... NONE! It was a tie.";
    }
}

function getComputerChoice() {
    let listChoices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = listChoices[randomNumber];
    return computerChoice;
}
