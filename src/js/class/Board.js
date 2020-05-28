import Enemy from "./Enemy";
import Item from "./Item";

export default class {
  #nbCards;

  constructor(nbCards) {
    this.el = document.querySelector('[data-board]');
    this.#nbCards = nbCards || 32;

    this.init();
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

    cards[cardIndex].outerHTML = cardCurrent.html;
    let elCardCurrent = document.querySelectorAll('.card')[cardIndex];
    elCardCurrent.addEventListener('click', () => {new Turn(this.hero, cardCurrent)});
  }
}