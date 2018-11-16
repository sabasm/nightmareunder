var player1 = 0
var player2 = 0
var score = 0

function ScoreBoard() {

  this.drawScore = function () {
    score = Math.floor(frames / 25)
    ctx.font = "50px Arial";
    ctx.strokeStyle = "white";
    ctx.strokeText("Score: " + score, c.width / 5, 128);
    ctx.font = "50px Arial";
    ctx.strokeStyle = "white";
    if (turn === 1) ctx.strokeText("Player 1", 2 * c.width / 3, 128);
    if (turn === 2) ctx.strokeText("Player 2", 2 * c.width / 3, 128);
    if (turn === 3 || turn === 0) ctx.strokeText("Let's play!", 2 * c.width / 3, 128);

    this.drawWinner()
  }

  this.drawWinner = function () {
    if (turn===3){
    ctx.font = "100px Arial"
    ctx.strokeStyle = "white";
    ctx.strokeText("GAME OVER", c.width / 2 - 300, 275);
    ctx.fillStyle = "white"
    ctx.font = "60px Arial"
    if (player1 > player2) ctx.fillText("Ganó el Player 1",c.width / 2 - 200, 550)
    if (player1 < player2) ctx.fillText("Ganó el Player 2",c.width / 2 - 200, 550)
    if (player1 === player2) ctx.fillText("Empate???, juega de nuevo",c.width / 2 - 370, 550)
  }
  }
}