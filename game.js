let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

function computerChoice(){
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}
function disableButtons(){
    buttons.forEach(btn=>{
        btn.disabled = true;
    });
}
function playRound(playerDecision){
    computerDecision = computerChoice();
    message = '';
    formattedComputerDecision = computerDecision.charAt(0).toUpperCase() + computerDecision.substring(1);
    formattedPlayerDecision = playerDecision.charAt(0).toUpperCase() + playerDecision.substring(1);
    
    if(computerDecision == 'rock' && playerDecision == 'scissors'
    || computerDecision == 'paper' && playerDecision == 'rock'
    || computerDecision == 'scissors' && playerDecision == 'paper'){
        computerScore++;
        message = `Player Score = ${playerScore}<br> Computer Score = ${computerScore} <br>
            You lose! ${formattedComputerDecision} beats ${formattedPlayerDecision}.`;
        if(computerScore == 5){
            message += '<br> You lost the game!';
            disableButtons();
        }
    }else if(computerDecision == 'rock' && playerDecision == 'paper'
    || computerDecision == 'paper' && playerDecision == 'scissors'
    || computerDecision == 'scissors' && playerDecision == 'rock'){
        playerScore++;
        message = `Player Score = ${playerScore}<br> Computer Score = ${computerScore}<br>
        You win! ${formattedPlayerDecision} beats ${formattedComputerDecision}.`;
        if(playerScore == 5){
            message += '<br>You won the game!';
            disableButtons();
        }
    }else{
        message = `Player Score = ${playerScore}<br> Computer Score = ${computerScore}<br>
        It's a draw! You both pick ${formattedComputerDecision}.`;
    }
    document.getElementById("result").innerHTML = message;
    return;
}



buttons.forEach(btn =>{
    btn.addEventListener('click', function(){
        playRound(btn.className);
    });
});