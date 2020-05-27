import Character from './Character';
import Debug from './Debug';
import Modal from './Modal';

export default class extends Character {
  #maxLife;
  #curLife;

  constructor(el) {
    super();
    this.el = el || document.querySelector('[data-hero]');
    this.afflictions = null;
    this.#maxLife = null;
    this.#curLife = null;
    this.weapon = null;

    this.init();
  }

  // this.maxLife = number
  set maxLife(life) {
    this.#maxLife = life;
  }

  get maxLife() {
    return this.#maxLife;
  }

  // Method init
  init() {
    this.maxLife = 90 + 10 * this.characterLevel;
    this.curLife = this.maxLife;

    this.el.innerHTML = `
      <div class="hero">
        <div class="hero__picture" data-hero-level="${this.characterLevel}">
          <img src="img/h-${this.imagePath}.jpg" alt="${this.characterName}">
          <div class="hero__afflictions" data-hero-afflictions></div>
        </div>

        <h2 class="hero__name">${this.characterName}</h2>

        <div class="hero__life">
          <div class="hero__bar"></div>
          <div class="hero__bar hero__bar--current" data-hero-lifebar></div>
          <span class="hero__life-current" data-hero-curlife></span>
          /
          <span class="hero__life-max" data-hero-maxlife></span>
        </div>

        <div class="hero__weapon"></div>
      </div>
    `;

    this.elAfflictions = document.querySelector('[data-hero-afflictions]');
    this.elLifeBar = document.querySelector('[data-hero-lifebar]');
    this.elCurLife = document.querySelector('[data-hero-curlife]');
    this.elMaxLife = document.querySelector('[data-hero-maxlife]');

    this.renderText(this.elMaxLife, this.maxLife);
    this.renderText(this.elCurLife, this.curLife);

    new Debug('-20', () => (this.changeLife(-20)));
    new Debug('+20', () => (this.changeLife(20)));
  }

  changeLife(points) {
    // Ajout des points à la vie
    this.curLife += points;

    // Si maintenant la vie actuelle dépasse la vie max alors la vie actuelle sera remise à la hauteur de la vie max
    if (this.curLife > this.maxLife) {
      this.curLife = this.maxLife;
    }
    else if(this.curLife <= 0) {
      this.curLife = 0;
      this.death();
    }

    // Mise à jour de l'interface utilisateur
    this.renderText(this.elCurLife, this.curLife);
    this.elLifeBar.style.minWidth = (this.curLife / this.maxLife * 100) + '%';
  }

  death() {
    new Modal('You\'re dead!', 'Please refresh the browser window to reset the game!');
  }

  //Method render
  renderText(el, text) {
    el.innerText = text;
  }
}