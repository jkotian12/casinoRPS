const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const playerChoiceDisplay = document.getElementById("playerChoice");
const enemyChoiceDisplay = document.getElementById("enemyChoice");
const reset = document.getElementById("reset");
const nextHand = document.getElementById("next");
const body = document.getElementById("body");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const playerScore = document.getElementById("pscore");
const player1Score = document.getElementById("p1score");
const player2Score = document.getElementById("p2score");
const enemyScore = document.getElementById("escore");

//initialize score
let pscore = 0;
let escore = 0;

//IIFE to initialise the game
const game = (function () {
  player1.innerHTML = `Casino`;
  player2.innerHTML = `You`;
  playerScore.innerHTML = `${pscore}`;
  enemyScore.innerHTML = `${escore}`;
  result.innerHTML = "Choose your hand from the bottom three cards";
  enemyChoiceDisplay.style.backgroundImage = 'url("logo.jpg")';

  //reset button functionality
  reset.addEventListener("click", () => {
    pscore = 0;
    escore = 0;
    playerScore.innerHTML = `${pscore}`;
    enemyScore.innerHTML = `${escore}`;
    result.innerHTML = "Choose your hand from the bottom three cards";
    choices.forEach((choice) => {
      for (let i = 0; i < choice.classList.length; i++) {
        if (choice.classList[i] == "leftChosen") {
          choice.classList.remove("leftChosen");
        }
        if (choice.classList[i] == "middleChosen") {
          choice.classList.remove("middleChosen");
        }
        if (choice.classList[i] == "rightChosen") {
          choice.classList.remove("rightChosen");
        }
      }
    });
  });
})();

//adding event listeners for each playable option\
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
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
    playerComparison(playerChoice, choice);
  });
});

//Function for comparing player and computer choices
const playerComparison = function (playChoice, choice) {
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
    console.log(updateScore(1, 0));
  } else {
    result.innerHTML = "You Lose";
    console.log(updateScore(0, 1));
  }
  nextHand.style.display = "block";
  nextHand.addEventListener("click", () => {
    newHand(playChoice, choice);
  });
};

//Function for updating the score after every play
const updateScore = function (player, enemy) {
  pscore = pscore + player;
  escore = escore + enemy;
  playerScore.innerHTML = `${pscore}`;
  enemyScore.innerHTML = `${escore}`;
};

//Function for the next play
const newHand = function (playerChoice, choice) {
  for (let i = 0; i < choice.classList.length; i++) {
    if (choice.classList[i] == "leftChosen") {
      choice.classList.remove("leftChosen");
    }
    if (choice.classList[i] == "middleChosen") {
      choice.classList.remove("middleChosen");
    }
    if (choice.classList[i] == "rightChosen") {
      choice.classList.remove("rightChosen");
    }
  }
  enemyChoiceDisplay.style.backgroundImage = 'url("logo.jpg")';
};
