function rockPaperScissor(player1, player2) {
  var a = "rock",
    b = "paper",
    c = "scissor";

  if (player1 == player2) {
    return "Draw!";
  } else if (
    (player1 == a && player2 == b) ||
    (player1 == b && player2 == c) ||
    (player1 == c && player2 == a)
  ) {
    return "Player 2 Won!";
  } else return "Player 1 Won!";
}

console.log(rockPaperScissor("scissor", "paper")); // "Player 1 Won!"
console.log(rockPaperScissor("rock", "paper")); // "Player 2 Won!"
console.log(rockPaperScissor("paper", "paper")); // "Draw!"
console.log(rockPaperScissor("rock", "rock")); // "Draw!"

module.exports = rockPaperScissor;
