let userScore = 0;
let compScore = 0;
let userScoreText = document.querySelector("#user-score");
let compScoreText = document.querySelector("#comp-score");
let Choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawgame = () => {
  msg.innerText = "It's a draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, comchoice) => {
  if (userwin) {
    msg.innerText = `You win! ${userchoice} beats ${comchoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScoreText.innerText = userScore;
  } else {
    msg.innerText = `You lose! ${comchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScoreText.innerText = compScore;
  }
};

const playgame = (userchoice) => {
  console.log(userchoice);
  comchoice = genCompChoice();
  console.log(comchoice);

  if (userchoice === comchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = comchoice === "scissors" ? true : false;
    } else if (userchoice === "paper") {
      userwin = comchoice === "rock" ? true : false;
    } else {
      userwin = comchoice === "paper" ? true : false;
    }
    showWinner(userwin, userchoice, comchoice);
  }
};

for (const choice of Choices) {
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
}
