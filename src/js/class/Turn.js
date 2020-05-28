export default class Turn {
  #hero;
  #card;

  constructor(hero, card) {
    this.#hero = hero;
    this.#card = card;

    this.init();
  }

  get hero() {
    return this.#hero;
  }

  get card() {  
    return this.#card;
  }

  init() {
    this.hero.changeLife(this.card.itemHeal);
  }
}