console.log("Hello World");

// generates a random int from 0-2 and 
// returns either rock paper or scissors 
// depending on that number
function getComputerChoice(){
    let choice = Math.floor(Math.random()* 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

console.log("Computer choice is: " + getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Please enter either 'rock', 'paper', or 'scissors'.");
    return choice;
}

console.log("Human choice is: " + getHumanChoice());

let humanScore = 0;
let computerScore = 0;
