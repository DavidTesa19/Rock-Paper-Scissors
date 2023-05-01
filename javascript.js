let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

const numOfRounds = 5;
let gameEnded = false;

const result = document.querySelector(".result");
const h1 = result.querySelector("h1");
let h2 = result.querySelector("h2");

let humanScoreText = result.querySelector("#human-score");
let computerScoreText = result.querySelector("#computer-score");

const btnDiv = document.querySelector(".options");
const btn = btnDiv.querySelectorAll("button");
let btnArray = [...btn];

const resetDiv = document.querySelector(".reset");
const resetButton = resetDiv.querySelector("button");

function playRound() {
    if(gameEnded) return;

    console.log(playerChoice);
    computerChoice = parseInt(Math.floor(Math.random()*3)+1);
    console.log(computerChoice);
    console.log(btnArray[computerChoice-1].textContent);
    h2.textContent = btnArray[computerChoice-1].textContent;

    if(playerChoice == computerChoice + 1 || playerChoice == computerChoice - 2) {
        result.querySelector("h1").textContent = "You Won";
        playerScore++;
        humanScoreText.textContent = "Human: " + playerScore;
    } else if (playerChoice == computerChoice) {
        h1.textContent = "Draw";
    } else {
        h1.textContent = "You Lost";
        computerScore++;
        computerScoreText.textContent = "Robot: " + computerScore;
    }



    checkResults();
}

function checkResults() {


    if(playerScore >= numOfRounds) {
        h1.textContent = "Humans Won";
        gameEnded = true;
    } else if (computerScore >= 5) {
        h1.textContent = "Robots Won";
        gameEnded = true;
    }
}



btn.forEach((button) => {
    
    button.addEventListener("click", () => {
        playerChoice = +button.id;
        playRound();
    });
});

resetButton.addEventListener("click", () => {
    computerScore = 0;
    playerScore = 0;
    humanScoreText.textContent = "Human: " + playerScore;
    computerScoreText.textContent = "Robot: " + computerScore;
    gameEnded = false;
});