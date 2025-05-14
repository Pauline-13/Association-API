const api = "https://randomuser.me/api/?results=50";
let donateurs = [];
let donateursFiltres = []; 


// Fetch des données
fetch(api)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des donateurs");
    }
    return response.json();  
  })
  .then(data => {
    donateurs = data.results.map(donateur => {
      return {
        ...donateur,
        montant: Math.floor(Math.random() * 200 + 10) 
      };
    });
    donateursFiltres = [...donateurs]; 
    afficherDonateurs(donateursFiltres); 
  })
  .catch(error => {
    console.error("Erreur :", error);
  });


// Fonction pour afficher les donateurs
function afficherDonateurs(donateurs) {
  const section = document.querySelector("section");
  section.innerHTML = ""; 

  donateurs.forEach(donateur => {
    const figure = document.createElement("figure");

    const h2Last = document.createElement("h2");
    h2Last.classList.add("last-name_card");
    h2Last.textContent = donateur.name.last;

    const h2First = document.createElement("h2");
    h2First.classList.add("first-name_card");
    h2First.textContent = donateur.name.first;

    const img = document.createElement("img");
    img.src = donateur.picture.large;

    const p = document.createElement("p");
    p.textContent = `Montant : ${donateur.montant} €`;

    figure.appendChild(h2Last);
    figure.appendChild(h2First);
    figure.appendChild(img);
    figure.appendChild(p);
    section.appendChild(figure);
  });
}


// Filtre par genre
const filtresAll = document.querySelector(".filter_all_aside");
filtresAll.addEventListener("click", function() {
  donateursFiltres = [...donateurs]; 
  afficherDonateurs(donateursFiltres);
});

const filtresHommes = document.querySelector(".filter_men_aside");
filtresHommes.addEventListener("click", function() {
  donateursFiltres = donateurs.filter(donateur => donateur.gender === 'male');
  afficherDonateurs(donateursFiltres);
});

const filtresFemmes = document.querySelector(".filter_women_aside");
filtresFemmes.addEventListener("click", function() {
  donateursFiltres = donateurs.filter(donateur => donateur.gender === 'female');
  afficherDonateurs(donateursFiltres);
});


// Filtre par ordre alphabétique
const filtreNoms = document.querySelector(".filter_alphabetical-order_aside");
filtreNoms.addEventListener("click", function() {
  const nomsTries = [...donateursFiltres].sort((a, b) => {
    if (a.name.last < b.name.last) return -1;
    if (a.name.last > b.name.last) return 1;
    return 0;
  });
  afficherDonateurs(nomsTries);
});


// Filtre par montant
const filtreSommes = document.querySelector(".filter_amount_aside");
filtreSommes.addEventListener("click", function () {
  const sommesTries = [...donateursFiltres].sort((a, b) => a.montant - b.montant);
  afficherDonateurs(sommesTries);
});
