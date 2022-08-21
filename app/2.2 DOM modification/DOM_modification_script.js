/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

const changeText = (currentText, replacementText, element = "*") => {
  const allNodes = document.body.querySelectorAll(element);

  for (const node of allNodes) {
    if (node.textContent.startsWith(currentText)) {
      node.innerText = replacementText;
    }
  }
};

changeText("Album example", "Ce que j'ai appris à THP", "h1");

changeText(
  "Something short and leading about",
  "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
);

changeText("Main call to action", "OK je veux tester !");

const changeHref = (currentText, replacementHref, element = "a") => {
  const allNodes = document.body.querySelectorAll(element);

  for (const node of allNodes) {
    if (node.textContent.startsWith(currentText)) {
      node.href = replacementHref;
    }
  }
};

changeHref("OK je veux tester !", "http://www.thehackingproject.org");

changeText("Secondary action", "Non Merci");

changeHref("Non Merci", "https://www.pole-emploi.fr/accueil");

changeText("Album", "The THP Experience");

const changeTextSize = (text, size, element = "*") => {
  const allNodes = document.body.querySelectorAll(element);

  for (const node of allNodes) {
    if (node.textContent.startsWith(text)) {
      node.style.fontSize = size;
    }
  }
};

changeTextSize("The THP Experience", "2em");

const imagesArray = [
  "https://img.icons8.com/color/480/000000/html-5.png",
  "https://img.icons8.com/color/480/000000/css3.png",
  "https://img.icons8.com/color/480/000000/javascript.png",
  "https://img.icons8.com/color/480/000000/ruby-programming-language.png",
  "https://img.icons8.com/color/480/000000/bootstrap.png",
  "https://img.icons8.com/color/480/000000/github.png",
  "https://miro.medium.com/max/460/1*8Pe7te8AEQoNzvfCy300pg.png",
  "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",
  "https://img.icons8.com/color/480/000000/heroku.png",
];

const populateImages = (array, element = "img") => {
  const allImages = document.body.querySelectorAll(element);
  for (let i = 0; i < allImages.length; i += 1) {
    allImages[i].src = array[i];
  }
};

populateImages(imagesArray);

const deleteLastCards = (num) => {
  const allCards = document.body.querySelectorAll(".card");
  for (let i = allCards.length - num; i < allCards.length; i += 1) {
    allCards[i].remove();
  }
};

deleteLastCards(3);

const changeCardtext = (index, replacementText, element = ".card-text") => {
  const allNodes = document.body.querySelectorAll(element);

  allNodes[index - 1].textContent = replacementText;
};

changeCardtext(
  1,
  "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
);

changeCardtext(
  2,
  "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML."
);

changeCardtext(
  3,
  "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
);

const changeViewButtons = (text, oldClass, newClass, element = "button") => {
  const allNodes = document.body.querySelectorAll(element);

  for (const node of allNodes) {
    if (node.textContent.startsWith(text)) {
      node.classList.remove(oldClass);
      node.classList.add(newClass);
    }
  }
}

changeViewButtons("View", "btn-outline-secondary", "btn-success")
