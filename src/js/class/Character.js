import characters from '../data/characters.json';

export default class Character {
  #character;

  constructor() {
    if (this.constructor === Character) {
      throw new TypeError('Character class "Character" cannot be instantiated directly');
    }

    this.#character = characters[Math.floor(Math.random() * characters.length)];
  }

  get character() {
    return this.#character; 
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
}