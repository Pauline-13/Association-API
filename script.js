

const API_URL = "https://randomuser.me/api/?results=20";

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

 
    section.innerHTML = "";

    donateurs.forEach(donateur => {
   
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

  
      const montant = Math.floor(Math.random() * 90 + 10);
      p.textContent = `Montant : ${montant} €`;


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

  // const filtres = document.querySelector(".filter_all_aside")
  // filtres.addEventListener("click", function());

  // const filtresHommes = document.querySelector(".filter_men_aside")
  // filtresHommes.addEventListener("click", function());

  // const filtresFemmes = document.querySelector(".filter_women_aside")
  // filtresFemmes.addEventListener("click", function());

  // const alphabet = document.querySelector(".filter_alphabetical-order_aside")
  // alphabet.addEventListener("click", function());

  // const somme = document.querySelector(".filter_amount_aside")
  // somme.addEventListener("click", function());


