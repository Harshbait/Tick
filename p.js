//Tick

let music = new Audio("ding-101492.mp3");
let winSound = new Audio("su.mp3");
let turn = 'X';
let gameOver = false;

const changeTurn = () => {
    turn = turn === 'X' ? 'O' : 'X';
    return turn;
}

const checkWin = () => {
    const winningCombinition = [           // Renamed variable for clarity
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    winningCombinition.forEach(combii => {
        const [a, b, c] = combii;
        if(boxText[a].innerText === boxText[b].innerText &&
           boxText[b].innerText === boxText[c].innerText &&
           boxText[a].innerText !== '' ) {
            document.querySelector('.info').innerText = boxText[a].innerText + ' is Won'
            winSound.play();
            gameOver = true;
            document.querySelector('.image img').style.width = "250px"
        }
    })
}

//Game Logic
const boxes = document.getElementsByClassName('box');
const boxText = Array.from(boxes).map(element => element.querySelector(".boxText"));

Array.from(boxes).forEach((element, index) => {
    element.addEventListener('click', () => {
        if(boxText[index].innerText == '' && !gameOver) {
            music.play();
            boxText[index].innerText = turn;
            music.play();
            changeTurn();
            checkWin();
            if(gameOver != true) {
                document.querySelector('.info').innerText = "Turn for "+turn;
            }
        }
    })
})

//Reset

document.querySelector('.Reset').addEventListener('click', () => {
    const boxTexts = document.querySelectorAll('.boxText')
    boxTexts.forEach(element => {
        element.innerText = ''; 
    })
    turn = 'X';
    gameOver = false
    document.querySelector('.info').innerText = "Turn for "+turn;
    document.querySelector('.image img').style.width = "0px"
}) 