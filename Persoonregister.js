var bijlage1 = {
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
}

let voornaam = document.createElement("p");
voornaam.innerHTML = bijlage1["voornaam"];
document.body.appendChild(voornaam);