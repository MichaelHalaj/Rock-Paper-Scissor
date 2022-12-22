let playerScore = 0;
let computerScore = 0;
function computerChoice(){
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerDecision){
    computerDecision = computerChoice();

    formattedComputerDecision = computerDecision.charAt(0).toUpperCase() + computerDecision.substring(0);
    console.log(formattedComputerDecision);
    if(computerDecision == 'rock' && playerDecision == 'paper'
    || computerDecision == 'paper' && playerDecision == 'rock'
    || computerDecision == 'scissors' && playerDecision == 'paper'){
        message = `You lose! ${computerDecision}`;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(btn =>{
    btn.addEventListener('click', function(){
        playRound(btn.className);
    });
});