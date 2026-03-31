

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


function playRound(humanChoice, computerChoice){

        // Case if both have same choice
        if(humanChoice === computerChoice){
            text.textContent = ("It's a tie! You both chose " + humanChoice + ".");
        }

        // Cases if human beats computer
        else if(humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "rock"){

                text.textContent = ("You win! " + humanChoice + " beats " + computerChoice + ".");
                humanScore++;

        }

        // Case if computer beats human
        else{
            text.textContent =("You lose! " + computerChoice + " beats " + humanChoice + ".");
            computerScore++;
        }

        if(humanScore === 5){
        text.textContent = ("Human wins with a score of " + humanScore + ":" + computerScore + "!");
        replay.appendChild(playAgain);
    }
    else if(computerScore === 5){
        text.textContent = ("Computer wins with a score of " + computerScore + ":" + humanScore + "!");
        replay.appendChild(playAgain);
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
const text = document.createElement("p");
const gameResult = document.createElement("p");
const playAgain = document.createElement("button");
const replay = document.querySelector("#playAgain");
playAgain.textContent = "Play Again?";

text.textContent = "Ready to play? Choose your move!";
results.appendChild(text);
results.appendChild(gameResult);

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
    if(replay.hasChildNodes()){return;}
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    gameResult.textContent = ("The current score is:\n Human: " + humanScore + " Computer: " + computerScore);
});

paper.addEventListener("click", () => {
    if(replay.hasChildNodes()){return;}
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    gameResult.textContent = ("The current score is:\n Human: " + humanScore + " Computer: " + computerScore);
});

scissors.addEventListener("click", () => {
    if(replay.hasChildNodes()){return;}
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    gameResult.textContent = ("The current score is:\n Human: " + humanScore + " Computer: " + computerScore);
});

playAgain.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    text.textContent = "Ready to play? Choose your move!";
    gameResult.textContent = "";
    playAgain.remove();
})

