// Iteration 5: Store the player score and display it on the game over scree
var Score = localStorage.getItem("Score");
document.getElementById("score-board").innerHTML=Score;

const playagain = document.getElementById("play-again-button");
playagain.onclick = function(){
    localStorage.setItem("Score",0);
    window.open("index.html","_self");
    
    
}