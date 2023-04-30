function getComputerChoice(num1) {
    return num1 = Math.floor(Math.random() * 3) + 1;
}

function test(a) {
    return a;
}

let input2;

function chosenNumber() {
    input2 = prompt("number between 1 and 3");

}
chosenNumber();

const computerNumber = getComputerChoice();

console.log(computerNumber + input2);

function showResult() {

    if(input2 == computerNumber + 2 || input2 == computerNumber - 1) {
        console.log("you won");
    }
    else if(input2 == computerNumber + 1) {
        console.log("draw");
    } else {
        console.log("lose");
    }
    console.log(computerNumber);
    chosenNumber();
}

showResult();