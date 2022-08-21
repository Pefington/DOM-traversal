/* eslint-disable no-console */

console.log("~~~~~~~~~~ 2.1 ~~~~~~~~~~\n ");

console.log(
  "\n1. Combien y a-t-il d'éléments <p> présents dans la page HTML ?"
);
console.dir(document.querySelectorAll("p").length);

console.log(
  "\n2. Quel est le contenu texte de l'élément portant l'id coucou ?"
);
console.dir(document.querySelector("#coucou").textContent);

console.log(
  "\n3. Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?"
);
console.dir(document.querySelectorAll("a")[2].attributes.href.value);

console.log("\n4. Combien d'éléments portent la classe compte-moi ?");
console.dir(document.querySelectorAll(".compte-moi").length);

console.log("\n5. Combien d'éléments <li> portent la classe compte-moi ?");
console.dir(document.querySelectorAll("li.compte-moi").length);

console.log(
  "\n6. Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?"
);
console.dir(document.querySelectorAll("ol > li.compte-moi").length);

console.log(
  '\n7. La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l\'utilisateur:'
);
console.dir(
  document.querySelector("div").querySelectorAll("ul")[1].querySelector("li")
    .textContent
);
