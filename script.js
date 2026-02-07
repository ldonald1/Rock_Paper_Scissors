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

// prompts the user to enter 'rock', 'paper', or 'scissors'
function getHumanChoice(){
    let choice = prompt("Please enter either 'rock', 'paper', or 'scissors'.");
    return choice;
}



// plays five rounds of rock paper scissors, 
// printing out the final winner after the last round
function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    // gets human choice and computer choice and
    // compares them to get the winner of that round
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

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
    }


    // loop that executes playRound 5 times 
    // to play 5 rounds of rock paper scissors
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

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

playGame();

