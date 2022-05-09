const Rock = document.getElementById("Rock")
const Paper = document.getElementById("Paper")
const Scissors = document.getElementById("Scissors")
const choices = document.querySelectorAll(".choice")
const result = document.getElementById("result");
const playerChoiceDisplay = document.getElementById("playerChoice");
const enemyChoiceDisplay = document.getElementById("enemyChoice");
const scoreDisplay = document.getElementById("score");
const header = document.getElementById("header");
const reset = document.getElementById("reset");

let score = 0;

const game = function(){
    header.innerHTML = "Make your Choice";
    scoreDisplay.innerHTML = `Score:${score}`;
    reset.addEventListener("click", ()=>{
        score = 0;
        scoreDisplay.innerHTML = `Score:${score}`;
    })
}()

choices.forEach(choice=>{
    choice.addEventListener("click", ()=>{
        playerChoice = choice.getAttribute("playerChoice");
        playerChoiceDisplay.innerHTML = `You chose ${playerChoice}`
        compareChoices(playerChoice);
    })
})



const compareChoices = function(playChoice){
     const choices = ["Rock", "Paper", "Scissors"];
     let enemyChoice = choices[Math.floor(Math.random() * 3)];
     enemyChoiceDisplay.innerHTML = `Opponent chose ${enemyChoice}`
     if(playChoice == enemyChoice ){
        result.innerHTML = "Draw"
     }
     else if (playChoice === 'Paper' && enemyChoice === 'Rock' || 
     playChoice === 'Rock' && enemyChoice === 'Scissors' ||
     playChoice === 'Scissors' && enemyChoice === 'Paper'){
         result.innerHTML = "You Win";
         updateScore(1)
     }
     else{
         result.innerHTML = "You Lose";
         updateScore(-1)
     }
} 

const updateScore = function(update){
    score = score + update;
    scoreDisplay.innerHTML = `${score}`
}