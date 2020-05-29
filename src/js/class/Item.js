// Importation des données depuis un fichier statique
import items from '../data/items.json';
import { stringHandler } from '../helpers';

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
    return this.item.type;
  }

  get itemHeal() {
    return this.item.heal;
  }

  get itemName() {
    return this.item.name;
  }

  get itemDescription() {
    return this.item.description;
  }

  get imagePath() {
    return stringHandler.imagePath(this.itemName);
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
}