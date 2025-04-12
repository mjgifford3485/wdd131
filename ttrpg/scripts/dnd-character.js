const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

const dndCharactersDisplay = document.querySelector(".dndCharacters");

let numdndCharacters = Number(window.localStorage.getItem("numdndCharacters-ls")) || 0;

if (numdndCharacters !== 0) {
    dndCharactersDisplay.textContent = numdndCharacters;
} else {
    dndCharactersDisplay.textContent = `You have created your first character`;
}

numdndCharacters++;

localStorage.setItem("numdndCharacters-ls", numdndCharacters);