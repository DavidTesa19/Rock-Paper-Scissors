let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

const numOfRounds = 5;
let gameEnded = false;

const result = document.querySelector(".result");
const h1 = result.querySelector("h1");
let h2 = result.querySelector("h2");

const score2 = document.querySelector(".score");
let humanScoreText = score2.querySelector("#human-score");
let computerScoreText = score2.querySelector("#computer-score");

const btnDiv = document.querySelector(".options");
const btn = btnDiv.querySelectorAll("button");
let btnArray = [...btn];

const resetDiv = document.querySelector(".reset");
const resetButton = resetDiv.querySelector("button");

let img1 = document.querySelector("#player");
let img2 = document.querySelector("#computer");


const rock = "./images/rock.png";
const paper = "./images/paper.png";
const scissors = "./images/scissors.png";

let items = [];
items.push(rock, paper, scissors);
console.log(items);

function playRound() {
    if(gameEnded) return;

    computerChoice = parseInt(Math.floor(Math.random()*3)+1);

    h2.textContent = "Robot choosed: " + btnArray[computerChoice-1].textContent;

    img1.src = items[playerChoice - 1];
    img2.src = items[computerChoice - 1];

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
        playerChoice = +button.value;
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