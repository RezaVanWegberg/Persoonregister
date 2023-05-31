var bijlage = [{
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
},
{
    "voornaam": "Masud",
    "achternaam": "Mohammed",
    "nationaliteit": "Iraans",
    "leeftijd": 37,
    "gewicht": 79
},
{
    "voornaam": "Marie",
    "achternaam": "Visser",
    "nationaliteit": "Belgische",
    "leeftijd": 42,
    "gewicht": 69
},
{
    "voornaam": "Klaas",
    "achternaam": "Wever",
    "nationaliteit": "Nederlandse",
    "leeftijd": 73,
    "gewicht": 85
},
{
    "voornaam": "Bjorn",
    "achternaam": "Hakke",
    "nationaliteit": "Zweeds",
    "leeftijd": 18,
    "gewicht": 71
},
{
    "voornaam": "Jouke",
    "achternaam": "Dijkstra",
    "nationaliteit": "Fries",
    "leeftijd": 29,
    "gewicht": 82
},
{
    "voornaam": "Bo",
    "achternaam": "Wáng",
    "nationaliteit": "Chinees",
    "leeftijd": 38,
    "gewicht": 65
}]

var ContainerElement = document.getElementById('container');

for (let x = 0; x < bijlage.length; x++) {

    let container = document.createElement("div");
    ContainerElement.appendChild(container);

    let voornaam = document.createElement("p");
    voornaam.innerHTML = "voornaam: " + bijlage[x]["voornaam"];
    container.appendChild(voornaam);

    let achternaam = document.createElement("p");
    achternaam.innerHTML = "achternaam: " + bijlage[x]["achternaam"];
    container.appendChild(achternaam);

    let nationaliteit = document.createElement("p");
    nationaliteit.innerHTML = "nationaliteit: " + bijlage[x]["nationaliteit"];
    container.appendChild(nationaliteit);

    let leeftijd = document.createElement("p");
    leeftijd.innerHTML = "leeftijd: " + bijlage[x]["leeftijd"];
    container.appendChild(leeftijd);

    let gewicht = document.createElement("p");
    gewicht.innerHTML = "gewicht: " + bijlage[x]["gewicht"];
    container.appendChild(gewicht);
}