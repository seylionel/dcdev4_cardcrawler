// On créé une Class
export default class {
  // Quelques propriétés privées
  #text;
  #callback;

  // Dans le constructeur on récupère le text du bouton ainsi que la fonction à appeler
  // -> Fichier: ../script.js
  // -> ligne 18: let btnHero = new Debug('New hero', changeHero); 
  constructor(text, callback) {
    // On stocke notre élément HTML qui contient tous nos boutons
    this.el = document.querySelector('[data-debug]');
    this.#text = text; // Ici 'New hero'
    this.#callback = callback; // Ici changeHero;

    this.init();
  }

  // renvoi 'New Hero'
  get text() {
    return this.#text;
  }

  // renvoi changeHero
  get callback() {
    return this.#callback;
  }

  // Cette méthode est lancée ici
  // -> Fichier: ../script.js
  // -> ligne 19: btnHero.init();
  init() {
    // On ajoute un bouton au format HTML à notre élément HTML
    // et on place notre 'New hero' entre les balises
    this.el.innerHTML += `<button class="button button--debug">${this.text}</button>`;

    // Il faut sélectionner le bouton nouvellement créé en JS, sinon on ne peut pas intéragir avec...
    // Le sélecteur CSS : '[data-debug] > *:last-child' va automatiquement sélectionner le dernier élément (cf : http://cssdiner.com level 17)
    this.elButton = document.querySelector('[data-debug] > *:last-child');

    // On ajoute un écouteur sur cet élément
    // L'écouteur va attendre que l'utilisateur clique sur le bouton
    // Quand l'utilisateur va cliquer sur le bouton ça va lancer la fonction
    // this.callback qui contient kwaaaa ?
    // -> Fichier: celui-ci même
    // -> ligne 14 : this.#callback = callback; // Ici changeHero
    this.elButton.addEventListener('click', this.callback);
  }
}