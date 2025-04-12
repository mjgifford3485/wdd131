const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

const vampireCharactersDisplay = document.querySelector(".vampireCharacters");

let numVampireCharacters = Number(window.localStorage.getItem("numVampireCharacters-ls")) || 0;

if (numVampireCharacters !== 0) {
    vampireCharactersDisplay.textContent = numVampireCharacters;
} else {
    vampireCharactersDisplay.textContent = `You have created your first character`;
}

numVampireCharacters++;

localStorage.setItem("numVampireCharacters-ls", numVampireCharacters);