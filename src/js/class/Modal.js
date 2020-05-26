// On créé une Class
export default class {
    // Quelques propriétés privées
    // Todo créer une propriété privée title
    #title
    // Todo créer une propriété privée description
    #description
    // Todo créer un constructeur avec 2 paramètres title, description
    constructor(title,description){
           // Todo stocker l'élément HTML avec l'attribut [data-modal] dans une propriété nommée el
    this.el = document.querySelector('[data-modal]');
         // Todo stocker title dans la propriété privée title 
    this.#title = title ;
      // Todo stocker description dans la propriété privée description
    this.#description = description;
    }


    // Todo fin du constructeur
  
    // Todo créer un getter pour la propriété privé title sur (3 lignes)
    get title(){
        return this.#title
    }
  
    // Todo créer un getter pour la propriété privé description sur (3 lignes)
    get title(){
        return this.#description
    }
    // Todo créer une méthode init
    init(){
      // Todo modifier le code HTML de l'élément stocké dans la propriété el
      // avec le code HTML de la page de démo à savoir : 
      this.el.innerHTML = `
      <div class="modal__content">
        <div class="modal__title">${this.#title}</div>
        <div class="modal__description">${this.#description}</div>
        <button class="button button--modal" data-modal-close>Ok!</button>
      </div>
    `;

    document.querySelector('[data-modal-close]').addEventListener('click', () => {this.el.setAttribute('data-modal', 'false')});


    this.el.setAttribute('data-modal', 'true');
    }
}


