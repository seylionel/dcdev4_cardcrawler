// Importation des données depuis un fichier statique
import items from '../data/items.json';

// Création de la class Item
export default class Item {
  // Privatisation de la propriété item
  #item;

  constructor() {
    // Affectation d'un item aléatoire à la propriété privée #item
    this.#item = items[Math.floor(Math.random() * items.length)];
  }

  get item() {
    return this.#item;
  }

  get itemType() {
    return this.#item.type;
  }

  get itemHeal() {
    return this.#item.heal;
  }

  get itemName() {
    return this.#item.name;
  }

  get itemDescription() {
    return this.#item.description;
  }

  get imagePath() {
    return this.itemName.toLowerCase().replace(/[\s\']/g, "");
  }

  get html() {
    return `
      <div class="card" data-type="item">
        <div class="card__holder">
          <div class="card__inner">
            <div class="card__item" data-tippy-content="${this.itemDescription}" style="background-image: url('img/i-${this.imagePath}.png')">
              <div class="card__value">+${this.itemHeal }</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  init() {
    console.log('TODO init de l\'item');
  }

  done() {
    
  }
}