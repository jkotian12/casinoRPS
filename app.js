const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const playerChoiceDisplay = document.getElementById("playerChoice");
const enemyChoiceDisplay = document.getElementById("enemyChoice");
const scoreDisplay = document.getElementById("score");
const header = document.getElementById("header");
const reset = document.getElementById("reset");
const nextHand = document.getElementById("next");
const body = document.getElementById("body");

//initialize score
let score = 0;

//IIFE to initialise the game
const game = (function () {
  header.innerHTML = "Make your Choice";
  scoreDisplay.innerHTML = `Score:${score}`;
  reset.addEventListener("click", () => {
    score = 0;
    scoreDisplay.innerHTML = `Score:${score}`;
    result.innerHTML = "";
  });
})();

//adding event listeners for each playable option 
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    body.classList.add("blurred")
    playerChoice = choice.getAttribute("playerChoice");
    let position = choice.getAttribute("position");
    if (position == "left") {
      choice.classList.add("leftChosen");
    }
    if (position == "middle") {
      choice.classList.add("middleChosen");
    }
    if (position == "right") {
      choice.classList.add("rightChosen");
    }
    compareChoices(playerChoice, choice);
  });
});

//Function for comparing player and computer choices
const compareChoices = function (playChoice, choice) {
  const choices = ["rock", "paper", "scissors"];
  let enemyChoice = choices[Math.floor(Math.random() * 3)];
  enemyChoiceDisplay.style.backgroundImage = `url("./${enemyChoice}.jpg")`;
  if (playChoice == enemyChoice) {
    result.innerHTML = "Draw";
  } else if (
    (playChoice === "paper" && enemyChoice === "rock") ||
    (playChoice === "rock" && enemyChoice === "scissors") ||
    (playChoice === "scissors" && enemyChoice === "paper")
  ) {
    result.innerHTML = "You Win";
    updateScore(1);
  } else {
    result.innerHTML = "You Lose";
    updateScore(-1);
  }
    nextHand.style.display="block";
    nextHand.addEventListener("click", ()=>{
      newHand(playChoice, choice);
    })
};

//Function for updating the score after every play
const updateScore = function (update) {
  score = score + update;
  scoreDisplay.innerHTML = `${score}`;
};

//Function for the next play
const newHand = function (playerChoice, choice) {
  for(let i = 0 ;i<choice.classList.length;i++){
      if(choice.classList[i]=="leftChosen"){
        choice.classList.remove("leftChosen");

      }
      if(choice.classList[i]=="middleChosen"){
        choice.classList.remove("middleChosen");
      }
      if(choice.classList[i]=="rightChosen"){
        choice.classList.remove("rightChosen");
      }
  }
};
