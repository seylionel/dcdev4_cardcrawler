import characters from '../data/characters.json';

export default class {
  #maxLife;
  #curLife;

  constructor(el) {
    this.el = el || document.querySelector('[data-hero]');
    this.character = characters[Math.floor(Math.random() * characters.length)];
    this.afflictions = null;
    this.#maxLife = null;
    this.#curLife = null;
    this.weapon = null;
  }

  get characterName() {
    return this.character.name;
  }

  get characterLevel() {
    return this.character.level;
  }

  //Method image path
  get imagePath() {
    return this.characterName.toLowerCase().replace(/[\s\']/g, "");
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
        <div class="hero__picture">
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
  }

  //Method render
  renderText(el, text) {
    el.innerText = text;
  }
}