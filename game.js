let playerScore = 0;
let computerScore = 0;
function computerChoice(){
    choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerChoice){
    computerDecision = computerChoice();

}

const buttons = document.querySelectorAll('buttons');

buttons.forEach(btn =>{
    console.log(btn);
    btn.addEventListener('click', function(){
        console.log(btn);
    });
});