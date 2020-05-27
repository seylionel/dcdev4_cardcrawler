// Création de la class Modal
// Crée une modale sur la page
// @title
// @description
////
export default class Modal {
  // Privatisation de propriétés el, title et description
  #el;
  #title;
  #description;

  // Récupération de 2 paramètres dans le contructeur : title, description
  // Exemple d'instanciation : new Modal('text', 'description');
  constructor(title, description) {
    // Affectation d'un élément HTML à la propriété privée #el
    this.#el = document.querySelector('[data-modal]');
    // Affectation du title à la propriété privée #title
    this.#title = title;
    // Affectation du la description à la propriété privée #description
    this.#description = description;

    // Lancement automatique d'une méthode à l'instanciation de la Class
    this.init();
  }

  // Getter de la propriété privée el
  get el() {
    return this.#el;
  }
  
  // Getter de la propriété privée title
  get title() {
    return this.#title;
  }
  
  // Getter de la propriété privée description
  get description() {
    return this.#description;
  }

  init() {
    // Génération du HTML de la modal
    this.el.querySelector('.modal__content').innerHTML = `
      <div class="modal__title">${this.title}</div>
      <div class="modal__description">${this.description}</div>
      <button class="button button--modal" data-modal-close>Ok!</button>
    `;

    // Ajout d'un gestionnaire d'évènement sur le bouton avec l'attribut data-modal-close qui va changer la valeur de l'attribut [data-modal] pour cacher la modale
    // ATTENTION L'AFFICHAGE EST GÉRÉ EN CSS GRÂCE AUX CHANGEMENT DES VALEURS DE L'ATTRIBUT (voir src/scss/components/_modals.scss)
    document.querySelector('[data-modal-close]').addEventListener('click', () => {this.el.setAttribute('data-modal', 'false')});

    // Changement de la valeur de l'attribut [data-modal] pour afficher la modale
    this.el.setAttribute('data-modal', 'true');
  }
}