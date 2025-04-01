const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-772761-wallpaper.jpg"
    },
    {
        templeName: "Seattle Washington",
        location: "Bellevue, Washington",
        dedicated: "1980, December, 2",
        area: 110000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seattle-washington/400x250/seattle-washington-temple-lighted-1079843-wallpaper.jpg"
    },
    {
        templeName: "Fukuoka Japan",
        location: "Fukuoka-shi, Fukuoka",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
    }
];

const templeList = document.getElementById('temple-list');
const links = document.querySelectorAll(".navigation a");
const h2 = document.querySelector("h2");

temples.forEach(temple => {
    const templeCard = document.createElement('div')
    templeCard.classList.add('temple-card');

    templeCard.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName} Image" loading = lazy width = 400 height = 250 >
      `;

    templeList.appendChild(templeCard);
});

function filterTemples(filteredTemple, title) {
    templeList.innerHTML = '';
    h2.textContent = title;

    filteredTemple.forEach(temple => {
        const templeCard = document.createElement('div')
        templeCard.classList.add('temple-card');

        templeCard.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName} Image" loading = lazy width = 400 height = 250>
      `;

        templeList.appendChild(templeCard);

    })
}

links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const title = event.target.title;
        let filteredTemple;

        switch (title) {
            case "Old":
                filteredTemple = temples.filter(temple => {
                    const yearDedicated = parseInt(temple.dedicated.split(',')[0]);
                    return yearDedicated < 1900;
                });
                filterTemples(filteredTemple, "Old Temples");
                break;
            case "New":
                filteredTemple = temples.filter(temple => {
                    const yearDedicated = parseInt(temple.dedicated.split(',')[0]);
                    return yearDedicated > 2000;
                });
                filterTemples(filteredTemple, "New Temples");
                break;
            case "Large":
                filteredTemple = temples.filter(temple => temple.area > 90000);
                filterTemples(filteredTemple, "Large Temples");
                break;
            case "Small":
                filteredTemple = temples.filter(temple => temple.area < 10000);
                filterTemples(filteredTemple, "Small Temples");
                break;
            default:
                filterTemples(temples, "Home");
                break;
        }
    });
})