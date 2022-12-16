function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        default:
            return 'scissor';
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissor'){
        return 'Invalid input'
    }
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You lose! Paper beats Rock';
    }else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        return 'You lose! Scissor beats Paper';
    }else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        return 'You lose! Rock beats Scissor';
    }else if(playerSelection === 'rock' && computerSelection === 'scissor'){
        return 'You win! Rock beats Scissor'
    }else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        return 'You win! Scissor beats Paper';
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win! Paper beats rock';
    }else{
        return `Draw! You both picked ${playerSelection}`;
    }

}

function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Pick rock, paper, or scissor");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();