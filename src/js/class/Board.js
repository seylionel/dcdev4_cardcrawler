export default class {
    #nbCards;
  
    constructor(nbCards) {
      this.el = document.querySelector('[data-board]');
      this.#nbCards = nbCards || 32;
  
      this.init();
    }
  
    get nbCards() {
      return this.#nbCards;
    }
  
    init() {
      for (let card = 0; card < this.nbCards; ++card) {
        this.el.innerHTML += `
          <div class="card">
            <div class="card__holder">
              <div class="card__inner">
                <div class="card__item">?</div>
              </div>
            </div>
          </div>
        `;
      }
    }
}
    // TODO propriété privée nbCards
 


      // TODO stocker dans une propriété el l'élement HTML avec l'attribut [data-board]
      // TODO stocker nbCards || 32 dans la propriété privée nbCards
      // TODO lancement de la méthode init() de la class

  
    // TODO getter la propriété nbCards (3 lignes)
  
    // TODO création de la méthode init()
      // TODO faire une boucle nbCards X
        // TODO AJOUTER au html de l'élément stocké dans this.el le html suivant
        // <div class="card" data-card>
        //   <div class="card__holder">
        //     <div class="card__inner">
        //       <div class="card__item">?</div>
        //     </div>
        //   </div>
        // </div>
        // TODO on incrémenter l'index de la boucle
      // TODO fin de la boucle
    // TODO fin de la méthode init()
