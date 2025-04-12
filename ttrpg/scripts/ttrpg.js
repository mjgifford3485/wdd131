const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

function generateAbility(event) {
    const min = 3;
    const max = 18;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const buttonId = event.target.id;
    const ability = buttonId.replace("generate-", "");
    document.getElementById(`${ability}-roll`).textContent = randomNum;
}

const abilities = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

abilities.forEach(ability => {
    document.getElementById(`generate-${ability}`).addEventListener("click", generateAbility);
});

