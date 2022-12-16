function getComputerChoice(){
    let choice = Math.random() * 3;
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
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You lose! Paper beats Rock');
    }else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        console.log('You lose! Scissor beats Paper');
    }else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        console.log('You lose! Rock beats Scissor')
    }else{
        console.log('You win!');
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);
    }
}