import Item from "./Item";

export default class Turn {
  #hero;
  #card;
  #callback;

  constructor(hero, card, callback) {
    this.#hero = hero;
    this.#card = card;
    this.#callback = callback;

    this.init();
  }

  get hero() {
    return this.#hero;
  }

  get card() {  
    return this.#card;
  }

  get callback() {  
    return this.#callback;
  }

  init() {
    console.log(this.card.constructor);

    switch (this.card.constructor) {
      case Item:
        this.hero.changeLife(this.card.itemHeal);
        break;
      default:
        console.log('Enemy here!');
        this.hero.changeLife(this.card.attack * -1);
    }

    this.callback();
  }
}