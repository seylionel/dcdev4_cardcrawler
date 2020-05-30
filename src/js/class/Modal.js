import modalText from '../data/modals-text.json';

// Création de la class Modal
// Crée une modale sur la page
// @title
// @description
////
export default class Modal {
  // Privatisation de propriétés el, title et description
  #el;
  #modalText;

  // Récupération de 2 paramètres dans le contructeur : title, description
  // Exemple d'instanciation : new Modal(0);
  constructor(index) {
    // Affectation d'un élément HTML à la propriété privée #el
    this.#el = document.querySelector('[data-modal]');
    // Affectation du title à la propriété privée #title
    this.#modalText = modalText[index];

    // Lancement automatique d'une méthode à l'instanciation de la Class
    this.init();
  }

  // Getter de la propriété privée el
  get el() {
    return this.#el;
  }

  // Getter de la propriété privée modalText
  get modalText() {
    return this.#modalText;
  }
  
  // Getter de la propriété privée title
  get modaleTextTitle() {
    return this.modalText.title;
  }
  
  // Getter de la propriété privée description
  get modaleTextDescription() {
    return this.modalText.description;
  }

  init() {
    // Génération du HTML de la modal
    this.el.querySelector('.modal__content').innerHTML = `
      <div class="modal__title">${this.modaleTextTitle}</div>
      <div class="modal__description">${this.modaleTextDescription}</div>
      <button class="button button--modal" data-modal-close>Ok!</button>
    `;

    // Ajout d'un gestionnaire d'évènement sur le bouton avec l'attribut data-modal-close qui va changer la valeur de l'attribut [data-modal] pour cacher la modale
    // ATTENTION L'AFFICHAGE EST GÉRÉ EN CSS GRÂCE AUX CHANGEMENT DES VALEURS DE L'ATTRIBUT (voir src/scss/components/_modals.scss)
    document.querySelector('[data-modal-close]').addEventListener('click', () => {this.el.setAttribute('data-modal', 'false')});

    // Changement de la valeur de l'attribut [data-modal] pour afficher la modale
    this.el.setAttribute('data-modal', 'true');
  }
}