
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
      // figure.classList.add("card_section");

     const h2Last = document.createElement("h2");
      h2Last.classList.add("last-name_card");
      h2Last.textContent = donateur.name.last;

        const h2First = document.createElement("h2");
      h2First.classList.add("first-name_card");
      h2First.textContent = donateur.name.first;

      const img = document.createElement("img");
      // img.classList.add("img_card");
      img.src = donateur.picture.large;

      const p = document.createElement("p");
      // p.classList.add("amount_card");

      // Montant aléatoire entre 10 et 100 €
      const montant = (Math.random() * 90 + 10).toFixed(0);
      p.textContent = `Montant : ${montant} €`;

      // Assemblage
      figure.appendChild(h2Last);
      figure.appendChild(h2First);
      figure.appendChild(img);
      figure.appendChild(p);
      section.appendChild(figure);
    });
  })
  .catch(error => {
    console.error("Erreur :", error);
  });
