const lista=["Ricardo Darín","Andrea del Boca","Javier Bardem","Luis Brandoni","Soledad Silveyra","Guido Kaczka",
"Carmen Barbieri","Adrian Suar","Ricardo Montaner","Valeria Bertuccelli","Ricardo Fort","Moria Casan","Gastón Pauls",
"Érica Rivas","Guillermo Franchella","Leonardo Sbaraglia","Susana Giménez","Natalia Oreiro","Diego Peretti","Osvaldo Laport","Sebastian Estebanez",
"Peter Capusotto"];

let randomString = lista[Math.floor(Math.random() * lista.length)];

console.log(randomString);

function updateCenteredDiv() {
    var randomString = lista[Math.floor(Math.random() * lista.length)];
    var centeredDiv = document.getElementById('centeredDiv');
    centeredDiv.textContent = randomString;
}

function addStringToArray() {
    var newString = prompt("Enter a new string:");
    if (newString) {
        lista.push(newString);
        updateCenteredDiv();
    }
}


updateCenteredDiv();

