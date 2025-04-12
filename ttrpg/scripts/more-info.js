const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

function rollDice() {
    const numDice = parseInt(document.getElementById('numDice').value);
    const diceSize = parseInt(document.getElementById('diceSize').value);

    if (numDice < 1 || diceSize < 2) {
        alert("Please enter at least a 1 for number of dice and 2 for dice size.");
        return;
    }

    let results = [];
    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * diceSize) + 1;
        results.push(roll)
    }

    document.getElementById('result').textContent = `You rolled: ${results.join(', ')}`;
}

document.getElementById('roll').addEventListener('click', rollDice)