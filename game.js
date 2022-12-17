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

function playRound(e){
    //playerSelection = document.querySelector(e.)
   // console.log(e.target.className);
    playerSelection = e.target.className;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
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
        return 'You win! Paper beats Rock';
    }else{
        firstLetterCap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        return `Draw! You both picked ${firstLetterCap}`;
    }

}

function game(){
    const buttons = document.querySelectorAll('button');
    const body = document.querySelector('body');
    buttons.forEach(btn => btn.addEventListener('click', function(e) {
        const result = document.createElement('div');
        result.classList.add('result');
        result.textContent = playRound(e);
        body.appendChild(result);
    }));
    
    //const rock = document.querySelector('.rock');
    
        //playerSelection = prompt("Pick rock, paper, or scissor");
        
        //console.log(playRound(playerSelection, computerSelection));

}



game();