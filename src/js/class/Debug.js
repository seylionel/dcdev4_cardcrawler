// On créé une Class
export default class Debug {
  // Privatisation de propriétés el, text et callback
  #el;
  #text;
  #callback;

  // Récupération de 2 paramètres dans le contructeur : text, callback
  // Exemple d'instanciation : new Debug('text', methode);
  constructor(text, callback) {
    // Affectation d'un élément HTML à la propriété privée #el
    this.#el = document.querySelector('[data-debug]');
    // Affectation du text à la propriété privée #text
    this.#text = text;
    // Affectation de la methode à la propriété privée #callback
    this.#callback = callback; // Ici changeHero;

    this.init();
  }

  // Getter de la propriété privée el
  get el() {
    return this.#el;
  }

  // Getter de la propriété privée text
  get text() {
    return this.#text;
  }

  // Getter de la propriété privée callback
  get callback() {
    return this.#callback;
  }

  // Cette méthode est lancée ici
  // -> Fichier: ../script.js
  // -> ligne 19: btnHero.init();
  init() {
    // On ajoute un bouton au format HTML à notre élément HTML
    // et on place notre 'New hero' entre les balises
    this.el.insertAdjacentHTML('beforeend', '<button class="button button--debug">' + this.text + '</button>');

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