let currentPlayer = 1;
const totalPlayers = 4;

function rollDice() {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  document.getElementById("diceImage").src = `dice${diceRoll}.png`;

  // TODO: Token movement based on diceRoll
  console.log(`Player ${currentPlayer} rolled: ${diceRoll}`);

  // Simulate a turn delay
  setTimeout(() => {
    currentPlayer = currentPlayer % totalPlayers + 1;
    document.getElementById("turnDisplay").innerText = `Player ${currentPlayer}'s Turn`;
  }, 1000);
}
