const playerOneBtn = document.querySelector('.btn1');
const playerTwoBtn = document.querySelector('.btn2');
const playerOneScore = document.querySelector('.player-one-score');
const playerTwoScore = document.querySelector('.player-two-score');
const resetBtn = document.querySelector('.reset');
const scoreMark = document.querySelector('#win-score');


let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let isGameOver = false;

scoreMark.addEventListener('change', () => {
    winningScore = parseInt(scoreMark.value);
    resetButton();
})

playerOneBtn.addEventListener('click', () => {
    if(!isGameOver){
        p1Score +=1;   
    }

    if(p1Score === winningScore) {
        isGameOver = true;
        playerOneScore.classList.add('winner');    
        playerTwoScore.classList.add('loser');
        playerOneBtn.disabled =true;
        playerTwoBtn.disabled =true;
    } 

    if(p1Score === 6 && p2Score === 6) {
        p1Score = 4;
        p2Score = 4;
        playerOneScore.innerText = 4;
        playerTwoScore.innerText = 4;
    }else if(p1Score === 10 && p2Score === 10) {
        p1Score = 8;
        p2Score = 8;
        playerOneScore.innerText = 8;
        playerTwoScore.innerText = 8;
    } 
    playerOneScore.innerText = p1Score; 
});

playerTwoBtn.addEventListener('click', () => {
    if(!isGameOver){
        p2Score +=1;   
    }

    if(p2Score === winningScore) {
        isGameOver = true;
        playerTwoScore.classList.add('winner');    
        playerOneScore.classList.add('loser');
        playerOneBtn.disabled =true;
        playerTwoBtn.disabled =true;
    } 

    if(p1Score === 6 && p2Score === 6) {
        p1Score = 4;
        p2Score = 4;
        playerOneScore.innerText = 4;
        playerTwoScore.innerText = 4;
    }else if(p1Score === 10 && p2Score === 10) {
        p1Score = 8;
        p2Score = 8;
        playerOneScore.innerText = 8;
        playerTwoScore.innerText = 8;
    } 
    playerTwoScore.innerText = p2Score;
});


resetBtn.addEventListener('click', resetButton);
function resetButton() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;
    playerOneScore.classList.remove('winner' , 'loser');    
    playerTwoScore.classList.remove('loser' , 'winner');
    playerOneBtn.disabled =false;
    playerTwoBtn.disabled =false;
}

