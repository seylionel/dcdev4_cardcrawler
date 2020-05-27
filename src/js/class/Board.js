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
    for (let card = 0; card < this.nbCards; ++card) {
      let text = '?'
      // if card modulo 8 = 0 alors je met carte à la place du point d'interogation
      // si oui alors text = 'Carte'

      this.el.innerHTML += `
        <div class="card">
          <div class="card__holder">
            <div class="card__inner">
              <div class="card__item">${text}</div>
            </div>
          </div>
        </div>
      `;
    }
  }
}