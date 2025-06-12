console.log('Connecté !');
let titre = document.getElementById('titre');
console.log(titre);
titre.style.color = 'green';

let score = 0;
console.log(score, "Initialisation");

score = score + 1;
console.log(score, "après addition");

const cours = "Javascript";
console.log(cours, "cours");

const mot1 = "Hello";
const mot2 = "World!";
console.log(mot1 + " " + mot2);

const btnRed = document.getElementById('btn-red'); 
const btnWhite = document.getElementById('btn-white');
console.log(btnRed, "bouton rouge");
console.log(btnWhite, "bouton blanc");
let compteur = 0;
console.log(compteur, "compteur  au demarrage");

function add() {
    compteur = compteur + 1;
    console.log(compteur, "compteur après incrémentation");
    titre.innerText = `Nombre de coups: ${compteur}`;
};

btnRed.addEventListener('click', function() {
    console.log('cercle rouge cliqué');
    add();
});

btnWhite.addEventListener('click', function() {
    console.log('cercle blanc cliqué');
    add();
});

setTimeout(function() {
    btnRed.remove();
    btnWhite.remove();
    titre.innerText = "Fin de la partie";
}, 10000);