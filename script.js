//----Carrousel----//
//Sélection des éléments
const slides = document.querySelectorAll(".slide");
const boutonSuivant = document.getElementById("suivant");

//Index de la slide visible
let indexActuel = 0;

//Fonction pour changer de slide
function afficherSlideSuivante() {
  //Enlève la classe "active" de l'actuelle
  slides[indexActuel].classList.remove("active");
  //Incrémente l'index (et revient à 0 si on est à la fin)
  indexActuel = (indexActuel + 1) % slides.length;
  //Ajoute la classe "active" à la nouvelle slide
  slides[indexActuel].classList.add("active");
}
//Ajout de l'écouteur d'événement
boutonSuivant.addEventListener("click", afficherSlideSuivante);
//----ToDoListe----//
//Sélection des élements
const formulaire = document.getElementById("formulaire");
const input = document.getElementById("item");
const liste = document.getElementById("liste");

//Quand on soumet le formulaire
formulaire.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page
  const texte = input.value.trim();

  if (texte !== "") {
    const nouvelItem = document.createElement("li");

    const spanTexte = document.createElement("span");
    spanTexte.textContent = texte;
    spanTexte.classList.add("texte-item");

    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "x";
    boutonSupprimer.classList.add("supprimer");

    spanTexte.addEventListener("click", function () {
      spanTexte.classList.toggle("barre");
    });

    boutonSupprimer.addEventListener("click", function () {
      liste.removeChild(nouvelItem);
    });

    nouvelItem.appendChild(spanTexte);
    nouvelItem.appendChild(boutonSupprimer);
    liste.appendChild(nouvelItem);

    input.value = "";
    input.focus();
  }
});
//----ScoreKeeper----//
// Séléction des éléments
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const scoreMax = document.getElementById("scoreMax");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const resetBtn = document.getElementById("reset");

//Valeurs initiales
let p1 = 0;
let p2 = 0;
let max = parseInt(scoreMax.textContent);
let jeuTermine = false;

//Fonction pour vérifier si quelqu'un a gagné
function verifierVictoire() {
  if (p1 === max || p2 === max) {
    jeuTermine = true;
    if (p1 === max) {
      score1.style.color = "green";
      score2.style.color = "red";
    }
    btn1.disabled = true;
    btn2.disabled = true;
  }
}

//Clic joueur 1
btn1.addEventListener("click", function () {
  if (!jeuTermine) {
    p1++;
    score1.textContent = p1;
    verifierVictoire();
  }
});

//Clic joueur2
btn2.addEventListener("click", function () {
  if (!jeuTermine) {
    p2++;
    score2.textContent = p2;
    verifierVictoire();
  }
});

//Clic reset
resetBtn.addEventListener("click", function () {
  p1 = 0;
  p2 = 0;
  jeuTermine = false;
  score1.textContent = 0;
  score2.textContent = 0;
  score1.style.color = "";
  score2.style.color = "";
  btn1.disabled = false;
  btn2.disabled = false;
});
