import Item from "./Item";
import Weapon from "./Weapon";
import Modal from "./Modal";

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
      // Enemy
      default:
        let heroAttack = (this.hero.weapon !== null) ? this.hero.weapon.attack : 0,
          potentialDamage = (this.card.attack * -1) + heroAttack,
          realDamage = (potentialDamage < 0) ? potentialDamage : 0;

        this.hero.changeLife(realDamage);

        // SI J'AI UNE DAGUE
        if (this.hero.weapon !== null && this.hero.weapon.weaponName === "Dagger") {
          if (this.hero.weapon.attack - 1 === 0) {
            this.hero.removeWeapon();
          }
          else {
            this.hero.weapon.attack -= 1;
            this.hero.renderWeapon();
          }
        }

        // TODO remplacer l'expression 1 !== 1 par l'expression suivante :
        // si attaque du héro modulo 2 n'est pas égale à l'attaque de l'ennemi modulo 2
        // et si l'attaque du héro n'est pas égale à 0
        if (heroAttack > 0 && heroAttack % 2 !== this.card.attack % 2) {
          this.hero.removeWeapon();

          new Modal(0);
        }
    }

    this.callback();
  }
}