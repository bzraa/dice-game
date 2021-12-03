var activePlayer = 0;
var scores = [0, 0];
var roundScore = 0;
var diceNumber = Math.floor(Math.random() * 6) + 1;
var isNewGame = true;

document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".dice").style.display = "none";
// Roll button
document.querySelector(".btn-roll").addEventListener("click", function (){
    if(isNewGame !== true){
        alert("Togloom duussan baina! .New game darj togloomoo dahin ehluulne uu!");
    }else{
        var diceNumber = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
        if(diceNumber !== 1){
            roundScore += diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
            // console.log(activePlayer);    
        }else{
            switchPlayer();
        }
    }
});
// Hold button
document.querySelector(".btn-hold").addEventListener("click", function(){
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
        document.getElementById("name-" + activePlayer).textContent = "Ялагч!";
        isNewGame = false;
    }
    switchPlayer();
})
// New game button
document.querySelector(".btn-new").addEventListener("click", newGame);
function switchPlayer(){
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.querySelector(".dice").style.display = "none";
}
function newGame(){
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    alert("Newgame");
}

