
function capitalize(string) {
    return string.substr(0, 1).toUpperCase().concat(string.substr(1).toLowerCase());
}

function playRound(humanChoice, computerChoice) {
    
    if (
        (humanChoice === "Rock" && computerChoice === "Rock") ||
        (humanChoice === "Paper" && computerChoice === "Paper") ||
        (humanChoice === "Scissors" && computerChoice === "Scissors")) {

        console.log("%c And the winner is... Well, what do you know, it was a tie!", "color: green");

    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")) {
        
        console.log("%c And the winner is... You!", "color: green");
        humanScore++;

    } else if (
        (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Paper" && humanChoice === "Rock") ||
        (computerChoice === "Scissors" && humanChoice === "Paper")) {
        
        console.log("%c And the winner is... the computer!", "color: green");
        computerScore++;
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("%c And the FINAL winner is... YOU! You won with a score of " + humanScore + "/5!", "color: orange")
    } else if (humanScore < computerScore) {
        console.log("%c And the FINAL winner is... the COMPUTER! You lost with a score of " + humanScore + "/5!", "color: orange")
    } else {
        console.log("%c And the FINAL winner is... NONE! It was a tie.", "color: orange")
    }
    
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, scissors?", "");
    
    while (humanChoice === null) {
        console.error("%c NOOOOooooO!", "font-weight: bold", "You must input a correct value!");
        humanChoice = prompt("Rock, paper, scissors?", "");
    }
    
    humanChoice = capitalize(humanChoice);
    
    while (!(humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors")) {
        humanChoice = prompt("You can only write rock, paper, or scissors.", "");
        
        while (humanChoice === null) {
            console.error("%c NOOOOooooO!", "font-weight: bold", "You must input a correct value!");
            humanChoice = prompt("Rock, paper, scissors?", "");
        }
        
        humanChoice = capitalize(humanChoice);
    }

    return humanChoice;
}

function getComputerChoice() {
    let listChoices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = listChoices[randomNumber];
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;
console.log("%c Press Enter in the document to begin!", "color: orange")

document.addEventListener('keypress', e => {
    if (e.key === "Enter") {
        playGame();
    }
});