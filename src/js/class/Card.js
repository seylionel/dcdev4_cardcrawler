import characters from '../data/characters.json';

// On créé une Class
export default class {
  // Quelques propriétés privées
  #character;
  #attack;

  constructor() {
    this.#character = characters[Math.floor(Math.random() * characters.length)];
    this.#attack = null;
  }

  get character() {
    return this.#character;
  }

  get characterName() {
    return this.#character.name;
  }

  get characterLevel() {
    return this.#character.level;
  }

  get imagePath() {
    return this.characterName.toLowerCase().replace(/[\s\']/g, "");
  }

  get attack() {
    return this.#attack;
  }

  get html() {
    return `
      <div class="card" data-type="enemy">
        <div class="card__holder">
          <div class="card__inner" style="background-image: url('img/e-${this.imagePath}.jpg')">
            <div class="card__hidden">${this.characterName}</div>
          </div>
        </div>
        <div class="card__type" data-tippy-content="Normal enemy, nothing to worry about..." style="background-image: url('img/a-normal.png')"></div>
        <div class="card__damage">${this.attack}</div>
      </div>
    `;
  }

  set attack(attack) {
    this.#attack = attack;
  }

  init() {
    this.attack = Math.floor(Math.random() * (3 * this.characterLevel)) + 1 * this.characterLevel;
  }
}