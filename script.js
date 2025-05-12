// URL de l'API ↓ 
const UrlApi = "https://randomuser.me/api/?results=50"

// Remplace cette URL par celle de ton API réelle
const API_URL = "https://randomuser.me/api/?results=8"; // ou le lien que tu as reçu

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des donateurs");
    }
    return response.json();
  })
  .then(data => {
    const donateurs = data.results;
    const section = document.querySelector("section");

    // Supprimer les figures déjà présentes en dur dans le HTML
    section.innerHTML = "";

    donateurs.forEach(donateur => {
      // Création de la carte
      const figure = document.createElement("figure");
      figure.classList.add("card_section");

      const h2 = document.createElement("h2");
      h2.classList.add("title_card");
      h2.textContent = `${donateur.name.last} ${donateur.name.first}`;

      const img = document.createElement("img");
      img.classList.add("img_card");
      img.src = donateur.picture.large;
      img.alt = `Photo de ${donateur.name.first}`;

      const p = document.createElement("p");
      p.classList.add("amount_card");

      // Montant aléatoire entre 10 et 100 €
      const montant = (Math.random() * 90 + 10).toFixed(2);
      p.textContent = `Montant : ${montant} €`;

      // Assemblage
      figure.appendChild(h2);
      figure.appendChild(img);
      figure.appendChild(p);

      section.appendChild(figure);
    });
  })
  .catch(error => {
    console.error("Erreur :", error);
  });
