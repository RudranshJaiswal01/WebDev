let boxes = document.querySelectorAll(".box");
let Game = document.querySelector(".Game");
let resetGame = document.querySelector("#resetGame");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnX = true;

let turnCount = 0

const moves = [0,1,2,3,4,5,6,7,8]

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

msgContainer.classList.remove("hide");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log('box clicked');
        turnCount = turnCount + 1
        console.log(turnCount)
        if(turnX) {
            box.style.color = "#C490D1"
            box.innerText = "X";
            turnX = false;
        }else {
            box.style.color = "#32908F"
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        let isWinner = checkWin();

        if (turnCount == 9 && !isWinner) {
            console.log("Game is draw")
            showDraw();
        }
    })
})

const showDraw = () => {
    msg.style.color = "#FAA916"
    msg.innerText = `"DRAW"`;
    msgContainer.classList.remove("hide");
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner, _box1, _box2, _box3) => {
    msg.style.color = "#FAA916"
    msg.innerText = `"Congratulations, Winner is ${winner}"`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    _box1.style.backgroundColor = "#40F99B"
    _box2.style.backgroundColor = "#40F99B"
    _box3.style.backgroundColor = "#40F99B"
}

const checkWin = () => {
    for ( let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val, boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
                return true;
            }
        }
    }
};
const resetFunc = () => {
    turnX = true;
    turnCount = 0
    enableBoxes();
    msgContainer.classList.add("hide");
    Game.classList.remove("hidden");
    for(let box of boxes) {
        box.style.backgroundColor = "#f0f0c9"
    }
}


newGame.addEventListener("click", resetFunc);
resetGame.addEventListener("click", resetFunc);