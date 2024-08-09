let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compScorePara = document.querySelector("#comp-score")
const userScorePara = document.querySelector("#user-score")
const drawScorePara = document.querySelector("#draw-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log('Draw');
    drawScore++
    msg.innerText = "Game Was Draw"
    msg.style.backgroundColor = "#124E78"
    drawScorePara.innerText = drawScore;
}

const showWin = (userWin) => {
    if(userWin) {
        console.log("you win");
        userScore++
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "darkGreen"
        userScorePara.innerText = userScore;
    } else {
        console.log("comp win")
        compScore++
        msg.innerText = "You Lose"
        msg.style.backgroundColor = "#ED6A5A"
        compScorePara.innerText = compScore;

    }
}

const playGame = (userChoice) => {
    console.log("user choosed", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choosed", compChoice);

    if(userChoice === compChoice) {
        drawGame()
    } else {
         let userWin = true;
         
         if(userChoice === "rock"){
             userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else if(userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log(userChoice, "was clicked");
        playGame(userChoice);
    });
});