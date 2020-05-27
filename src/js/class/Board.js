import Card from "./Card";

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
      console.log('nimportekoi');
      // Le ternaire
      // let text = (card % 8 === 0) ? 'carte' : '?';
      let cardHTML = '';
      
      if (index % 8 === 0) {
        let card = new Card();
        card.init();
        cardHTML = card.html;
      }
      else {
        cardHTML = `
          <div class="card">
            <div class="card__holder">
              <div class="card__inner">
                <div class="card__item">?</div>
              </div>
            </div>
          </div>
        `;
      }

      this.el.insertAdjacentHTML('beforeend', cardHTML);
    }
  }
}
