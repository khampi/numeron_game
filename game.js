// Iteration 2: Generate 2 random number and display it on the screen
var num1 = Math.floor(Math.random()*100);
var num2 = Math.floor(Math.random()*100);
document.getElementById("number1").innerHTML = num1;
document.getElementById("number2").innerHTML = num2;
// Iteration 3: Make the options button functional
var score = parseInt(localStorage.getItem("Score"))||0;
const greater = document.getElementById("greater-than");
greater.onclick = function() {
    
    if(num1 > num2)
    {
        score++;
        localStorage.setItem("Score", score);
        reload();
       
    }
    else{
        window.open("gameover.html","_self");
    }
    

}
const lesser = document.getElementById("lesser-than");
lesser.onclick = function() {
  
    if(num1 < num2)
    {
        score++;
        localStorage.setItem("Score", score);
        reload();
    }
    else{
        window.open("gameover.html","_self");
    }
}
const equal = document.getElementById("equal-to");
equal.onclick = function() {
   
    if(num1 == num2)
    {
        score++;
        localStorage.setItem("Score", score);
        reload();
    }
    else{
        window.open("gameover.html","_self");
    }
}
// Iteration 4: Build a timer for the game
var sec = 5;
var timer = setInterval(function() {
    document.getElementById("timer").innerHTML = sec;
    sec--;
    if(sec<0){
        clearInterval(timer);
        window.open("gameover.html","_self");
    }
},1000);

function reload() {
    window.location.reload();  
}




