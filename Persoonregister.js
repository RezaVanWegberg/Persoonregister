var bijlage1 = {
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
}

var ContainerElement = document.getElementById('container');


let voornaam = document.createElement("p");
voornaam.innerHTML = "voornaam: " + bijlage1["voornaam"];
ContainerElement.appendChild(voornaam);

let achternaam = document.createElement("p");
achternaam.innerHTML = "achternaam: " + bijlage1["achternaam"];
ContainerElement.appendChild(achternaam);

let nationaliteit = document.createElement("p");
nationaliteit.innerHTML = "nationaliteit: " + bijlage1["nationaliteit"];
ContainerElement.appendChild(nationaliteit);

let leeftijd = document.createElement("p");
leeftijd.innerHTML = "leeftijd: " + bijlage1["leeftijd"];
ContainerElement.appendChild(leeftijd);

let gewicht = document.createElement("p");
gewicht.innerHTML = "gewicht: " + bijlage1["gewicht"];
ContainerElement.appendChild(gewicht);

