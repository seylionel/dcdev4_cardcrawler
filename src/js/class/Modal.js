// On créé une Class
export default class {
  // Quelques propriétés privées
  #title;
  #description;

  constructor(title, description) {
    this.el = document.querySelector('[data-modal]');
    this.#title = title;
    this.#description = description;

    this.init();
  }

  // Todo créer un getter pour la propriété privé title sur (3 lignes)
  get title() {
    return this.#title;
  }

  // Todo créer un getter pour la propriété privé description sur (3 lignes)
  get description() {
    return this.#description;
  }

  init() {
    this.el.innerHTML = `
      <div class="modal__content">
        <div class="modal__title">${this.title}</div>
        <div class="modal__description">${this.description}</div>
        <button class="button button--modal" data-modal-close>Ok!</button>
      </div>
    `;

    document.querySelector('[data-modal-close]').addEventListener('click', () => {this.el.setAttribute('data-modal', 'false')});

    // Todo changer la valeur de l'attribut data-modal de l'élément HTML stocké dans la propriété el de la Class avec la valeur "true" pour avoir quelque chose qui ressemble à data-modal="true" en utilisant la méthode setAttribute(attribut, valeur);
    this.el.setAttribute('data-modal', 'true');
  }
}