var player1random=Math.random()*6
player1random=Math.floor(player1random)+1

var player2random=Math.random()*6
player2random=Math.floor(player2random)+1

var player1dice="images/dice"+player1random+".png"
var player2dice="images/dice"+player2random+".png"

console.log(player1dice)
console.log(player2dice)

// Vanilla Javascript
// document.querySelector(".img1").src=player1dice
// document.querySelector(".img2").src=player2dice

// Jquery 
$(".img1").attr("src", player1dice)
$(".img2").attr("src", player2dice)

if(player1random>player2random){
    // document.querySelector(".container h1").textContent="🚩Play 1 wins!"
    $(".container h1").text("🚩Play 1 wins!")
}
else if(player1random<player2random){
    // document.querySelector(".container h1").textContent="Player 2 wins!🚩"
    $(".container h1").text("Player 2 wins!🚩")
}
else{
    // document.querySelector(".container h1").textContent="Draw!"
    $(".container h1").text("Draw!")
}
