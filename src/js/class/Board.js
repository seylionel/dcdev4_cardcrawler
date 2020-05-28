import Hero from "./Hero";
import Enemy from "./Enemy";
import Item from "./Item";
import Turn from "./Turn";

export default class {
  #el;
  #hero;
  #nbCards;

  constructor(nbCards) {
    this.#el = document.querySelector('[data-board]');
    this.#hero = new Hero();
    this.#nbCards = nbCards || 32;

    this.init();
  }

  get el() {
    return this.#el;
  }

  get hero() {
    return this.#hero;
  }

  get nbCards() {
    return this.#nbCards;
  }

  init() {
    for (let index = 0; index < this.nbCards; ++index) {
      // Le ternaire
      // let text = (card % 8 === 0) ? 'si vrai' : 'si faux';
      let cardHTML = `
        <div class="card">
          <div class="card__holder">
            <div class="card__inner">
              <div class="card__item">?</div>
            </div>
          </div>
        </div>
      `;

      this.el.insertAdjacentHTML('beforeend', cardHTML);
    }

    this.createCard(0);
    this.createCard(8);
    this.createCard(16);
    this.createCard(24);
  }

  createCard(cardIndex) {
    let cardHTML,
        cardCurrent,
        random = Math.random(),
        cards = document.querySelectorAll('.card');
        
    if (random < 6 / 10) {
      cardCurrent = new Enemy();
    }
    else if (random < 8/10) {
      cardCurrent = new Item();
    }
    else {
      // TODO new Weapon();
      cardCurrent = new Item();
    }

    cardCurrent.init();

    // On crée un nouvel élément HTML
    cards[cardIndex].outerHTML = cardCurrent.html;
    // On stocke l'élément HTML nouvellement crée
    let elCardCurrent = document.querySelectorAll('.card')[cardIndex];
    // On ajoute un écouteur sur l'élément
    // Au clique de l'utilisateur sur la carte on lance un nouveau tours de jeu
    // @hero : on envoi le héro dans le tours de jeu
    // @cardInstance : la carte que doit affronter le héro
    // @callback : un function locale qui sera rappelée à la fin du tours
    elCardCurrent.addEventListener('click', () => {new Turn(this.hero, cardCurrent, () => { this.disableCard(cardIndex)})});
  }

  disableCard(index) {

  }
}