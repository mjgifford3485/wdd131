const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

const cprCharactersDisplay = document.querySelector(".cprCharacters");

let numcprCharacters = Number(window.localStorage.getItem("numcprCharacters-ls")) || 0;

if (numcprCharacters !== 0) {
    cprCharactersDisplay.textContent = numcprCharacters;
} else {
    cprCharactersDisplay.textContent = `You have created your first character`;
}

numcprCharacters++;

localStorage.setItem("numcprCharacters-ls", numcprCharacters);