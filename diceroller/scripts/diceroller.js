// diceRoller.js

// Function to roll the dice
function rollDice() {
    // Get the number of dice and the size of each die from user inputs
    const numDice = parseInt(document.getElementById('numDice').value);
    const diceSize = parseInt(document.getElementById('diceSize').value);

    // Make sure the inputs are valid
    if (numDice <= 0 || diceSize < 2) {
        alert("Please enter valid values for the number of dice and dice size.");
        return;
    }

    let results = [];
    for (let i = 0; i < numDice; i++) {
        // Roll a die and get a random value between 1 and diceSize
        const roll = Math.floor(Math.random() * diceSize) + 1;
        results.push(roll);
    }

    // Display the result
    document.getElementById('result').textContent = `You rolled: ${results.join(', ')}`;
}
