let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

function computerChoice(){
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerDecision){
    computerDecision = computerChoice();
    message = '';
    formattedComputerDecision = computerDecision.charAt(0).toUpperCase() + computerDecision.substring(1);
    formattedPlayerDecision = playerDecision.charAt(0).toUpperCase() + playerDecision.substring(1);

    if(computerDecision == 'rock' && playerDecision == 'scissors'
    || computerDecision == 'paper' && playerDecision == 'rock'
    || computerDecision == 'scissors' && playerDecision == 'paper'){
        message = `You lose! ${formattedComputerDecision} beats ${formattedPlayerDecision}.`;
    }else if(computerDecision == 'rock' && playerDecision == 'paper'
    || computerDecision == 'paper' && playerDecision == 'scissors'
    || computerDecision == 'scissors' && playerDecision == 'rock'){
        message = `You win! ${formattedPlayerDecision} beats ${formattedComputerDecision}`;
    }else{
        message = `It's a draw! You both pick ${formattedComputerDecision}.`;
    }
    document.getElementById("result").innerHTML = message;
    return;
}



buttons.forEach(btn =>{
    btn.addEventListener('click', function(){
        playRound(btn.className);
    });
});