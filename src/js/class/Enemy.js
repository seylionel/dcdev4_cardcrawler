import Character from './Character';

// On créé une Class
export default class extends Character {
  // Quelques propriétés privées
  #attack;

  constructor() {
    super();
    this.#attack = null;
  }

  get attack() {
    return this.#attack;
  }

  set attack(attack) {
    this.#attack = attack;
  }

  get html() {
    return `
      <div class="card" data-type="enemy" data-hero-level="${this.characterLevel}" data-tippy-content="${this.characterName}">
        <div class="card__holder">
          <div class="card__inner" style="background-image: url('img/e-${this.imagePath}.jpg')">
          </div>
        </div>
        <div class="card__type" style="background-image: url('img/a-normal.png')"></div>
        <div class="card__damage">${this.attack}</div>
      </div>
    `;
  }

  init() {
    //this.attack = 3 * (this.characterLevel - 1) + Math.ceil(Math.random() * 3);
    this.attack = 2 * this.characterLevel + Math.ceil(Math.random() * 5);
  }
}