import Enemy from "./Enemy";

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
      
      if (index % 8 === 0) {
        let enemy = new Enemy();
        enemy.init();

        cardHTML = enemy.html;
      }

      this.el.insertAdjacentHTML('beforeend', cardHTML);
    }
  }
}
