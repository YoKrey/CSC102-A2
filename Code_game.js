function flipcoin()
{
    var Player1 = Math.ceil(Math.random() *2);
    // generates random # between 1 & 2 
    var Player2 = Math.ceil(Math.random() *2);

var headsimage = "quarter-heads.jpg";
var tailsimage = "tails-quarter.jpg"; 


if (Player1 == 1)
{
    document.getElementById("player1img") .src =headsimage
}
else if (Player1 == 2)
{
    document.getElementById("player1img") .src =tailsimage
}

if (Player2 == 1)
    {
        document.getElementById("player2img") .src =headsimage
    }
    else if (Player2 == 2)
    {
        document.getElementById("player2img") .src =tailsimage
    }

    if (Player1 == Player2)
    {
        document.getElementById("FinalResults").innerHTML = "Draw!";
 }
// Player 1 wins
 else if (Player1 == 1 && Player2 == 2) 
 {
    document.getElementById("FinalResults").innerHTML = "Player 1 Wins!";
 }

 //Player 2 wins
 else if (Player1 == 2 && Player2 == 1)
 {
    document.getElementById("FinalResults").innerHTML = "Player 2 Wins!";
 }


}