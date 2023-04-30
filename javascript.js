let rounds = 5;
let playerScore = 0;
let computerScore = 0;

function playRound() {

    function getComputerChoice(num1) {
        num1 = Math.floor(Math.random() * 3) + 1;
        return num1;
    }
    
    let x = getComputerChoice();
    console.log(x);
    const objects = [];
    objects.push("rock", "paper", "scissors");
    
    
    let choice = +prompt("choose between 1 and 3");
    
    function calculateResults() {
        if(choice == x + 1 || choice == x -2) {
            console.log("You win! " + objects[choice-1] + " beats " + objects[x - 1]);
            playerScore++;
        }
        else if(choice == x) {
            console.log("Draw! " + objects[choice-1] + "equals " + objects[x - 1]);
        }
        else {
            console.log("You lose! " + objects[choice-1] + " beats " + objects[x - 1]);
            computerScore++;
        }
        console.log("human " + playerScore + " Robot " + computerScore)
        checkScore();
    }
    
    function checkScore() {
        if(playerScore >= rounds) {
            console.log("You beated computer");
        }
        else if(computerScore >= rounds) {
            console.log("Computer beated you!")
        }
        else {
            playRound();
        }
    }
    
    calculateResults();
}

playRound();