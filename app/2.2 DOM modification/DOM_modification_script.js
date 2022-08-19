/* eslint-disable no-console */

console.log("~~~~~~~~~~ 2.2 ~~~~~~~~~~\n ");

// console.dir(document.querySelectorAll("*"));

console.log("\n1. Écris une fonction changeTitles()");

const changeTitles = () => {
  const allNodes = document.body.querySelectorAll("*");
  console.dir(allNodes);
  
}

changeTitles();
