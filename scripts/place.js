const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

let temp = document.getElementById("getTemp").innerText;

const speed = document.getElementById("getSpeed").innerText;

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16)
}

let windChill = calculateWindChill(temp, speed)

if (temp <= 10 && speed > 4.8) {
    document.getElementById("result").innerHTML = windChill.toFixed(2) + "°C";
} else {
    document.getElementById("result").innerHTML = "N/A";
}

