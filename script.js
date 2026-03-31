

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

// prompts the user to enter 'rock', 'paper', or 'scissors'
function getHumanChoice(){
    let choice = prompt("Please enter either 'rock', 'paper', or 'scissors'.");
    return choice;
}

// plays five rounds of rock paper scissors, 
// printing out the final winner after the last round
function playGame(){

    

    // gets human choice and computer choice and
    // compares them to get the winner of that round
    


    // compares final scores to determine
    // the winner of the game
    if(humanScore > computerScore){
        console.log("Human wins with a score of " + humanScore + ":" + computerScore + "!");
    }
    else if(computerScore > humanScore){
        console.log("Computer wins with a score of " + computerScore + ":" + humanScore + "!");
    }
    else{
        console.log("It's a tie! The final score is " + humanScore + ":" + computerScore + "!");
    }

}

function playRound(humanChoice, computerChoice){

        // Case if both have same choice
        if(humanChoice === computerChoice){
            console.log("It's a tie! You both chose " + humanChoice + ".");
        }

        // Cases if human beats computer
        else if(humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "rock"){

                console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
                humanScore++;

        }

        // Case if computer beats human
        else{
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            computerScore++;
        }

        if(humanScore === 5){
        console.log("Human wins with a score of " + humanScore + ":" + computerScore + "!");
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5){
        console.log("Computer wins with a score of " + computerScore + ":" + humanScore + "!");
        humanScore = 0;
        computerScore = 0;
    }
    }

let humanScore = 0;
let computerScore = 0;
// initalize humanScore and computerScore

// initialize humanChoice and computerChoice
let humanChoice = "";
let computerChoice = "";

const choicesbox = document.querySelector("#choices");
const results = document.querySelector("#results");

const rock = document.createElement("button");
rock.textContent = "Rock";
const paper = document.createElement("button");
paper.textContent = "Paper";
const scissors = document.createElement("button");
scissors.textContent = "Scissors";

choicesbox.appendChild(rock);
choicesbox.appendChild(paper);
choicesbox.appendChild(scissors);



rock.addEventListener("click", () => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

paper.addEventListener("click", () => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

