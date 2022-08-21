/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

console.log("~~~~~~~~~~ 2.2 ~~~~~~~~~~\n ");


// 1. Write a changeText function
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


