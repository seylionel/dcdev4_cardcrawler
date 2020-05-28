import Item from "./Item";
import Weapon from "./Weapon";

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
    switch (this.card.constructor) {
      case Item:
        this.hero.changeLife(this.card.itemHeal);
        break;
      case Weapon:
        this.hero.changeWeapon(this.card);
        break;
      default:
        let potentialDamage = (this.card.attack * -1) + this.hero.attack,
            realDamage = (potentialDamage < 0) ? potentialDamage : 0;
        
        this.hero.changeLife(realDamage);
    }

    this.callback();
  }
}