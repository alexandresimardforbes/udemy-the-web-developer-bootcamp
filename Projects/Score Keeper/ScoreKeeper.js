var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1DisplaySpan = document.querySelector("#p1Display");
var p2DisplaySpan = document.getElementById("p2Display");
var numInput = document.querySelector("input");
var winnerScoreSpan = document.querySelector("p span")

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    p1Score = Scoring(p1Score)
    p1DisplaySpan.textContent = p1Score;
    if(gameOver){
        p1DisplaySpan.classList.add("winner");
    }
});

p2Button.addEventListener("click", function(){
    p2Score = Scoring(p2Score)
    p2DisplaySpan.textContent = p2Score;
      if(gameOver){
        p2DisplaySpan.classList.add("winner");
    }
});

resetButton.addEventListener("click", function(){
    ScoreReset();
})

numInput.addEventListener("change", function() {
    winningScore = Number(numInput.value);
    winnerScoreSpan.textContent = winningScore;
    ScoreReset();
})

function Scoring(currentScore) {
    if(!gameOver){
        currentScore++;
        if(currentScore === winningScore){
            gameOver = true;
            DisableWin();
        }                  
    }
    DisplayScore();
    return currentScore  
}

function DisableWin() {
 p1Button.disabled = true;
 p2Button.disabled = true;
}

function DisplayScore() {
    p1DisplaySpan.textContent = p1Score;
    p2DisplaySpan.textContent = p2Score;
}

function ScoreReset() {
    p1Score = 0;
    p2Score = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1DisplaySpan.classList.remove("winner");
    p2DisplaySpan.classList.remove("winner");
    gameOver = false;
    DisplayScore();

}





