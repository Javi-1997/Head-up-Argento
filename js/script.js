const lista1=["Ricardo Darín","Andrea del Boca","Javier Bardem","Luis Brandoni","Soledad Silveyra","Guido Kaczka",
"Carmen Barbieri","Adrian Suar","Ricardo Montaner","Valeria Bertuccelli","Ricardo Fort","Moria Casan","Gastón Pauls",
"Érica Rivas","Guillermo Franchella","Leonardo Sbaraglia","Susana Giménez","Natalia Oreiro","Diego Peretti","Osvaldo Laport","Sebastian Estebanez",
"Peter Capusotto"];
const lista=[];



let randomString = lista[Math.floor(Math.random() * lista.length)];

console.log(randomString);

function updateCenteredDiv() {
    setTimeout(function() {
    var randomString = lista[Math.floor(Math.random() * lista.length)];
    var centeredDiv = document.getElementById('centeredDiv');
    centeredDiv.textContent = randomString;}
    , 1500);
}

function addStringToArray() {
    
    let userInput = prompt("Enter a string:");
    lista.push(userInput)

 
    displayArray();

}


function displayArray() {
    
    let resultElement = document.getElementById("agregar");
}
updateCenteredDiv();

console.log(lista);
