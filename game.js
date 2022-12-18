let playerScore = 0, computerScore = 0;

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
    playerSelection = e.target.className;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    firstLetterCapPlayer = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    firstLetterCapComputer = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissor'){
        return 'Invalid input';
    }
    if(playerSelection === 'rock' && computerSelection === 'paper'
        || playerSelection === 'paper' && computerSelection === 'scissor'
        || playerSelection === 'scissor' && computerSelection === 'rock'){
        computerScore++;
        return `You lose! ${firstLetterCapComputer} beats ${firstLetterCapPlayer}`;
    }else if(playerSelection === 'rock' && computerSelection === 'scissor'
        || playerSelection === 'scissor' && computerSelection === 'paper'
        || playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return `You win! ${firstLetterCapPlayer} beats ${firstLetterCapComputer}`;
    }else{
        return `Draw! You both picked ${firstLetterCapPlayer}`;
    }
}

function game(){
    const buttons = document.querySelectorAll('button');
    const body = document.querySelector('body');
    const playerElementScore = document.querySelector('.player-score');
    const computerElementScore = document.querySelector('.computer-score');

    buttons.forEach(btn => btn.addEventListener('click', function(e) {
        const result = document.createElement('div');

        result.classList.add('result');
        result.textContent = playRound(e);

        playerElementScore.textContent = playerScore;
        computerElementScore.textContent = computerScore;
        body.appendChild(result);

    }));
}



game();