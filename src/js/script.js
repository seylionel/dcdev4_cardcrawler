import tippy from 'tippy.js';

// On importe la Class Hero
import Hero from './class/Hero';
// On importe la Class Board
import Board from './class/Board';
// On importe la Class Debug
import Debug from './class/Debug';
// On importe la Class Modal
import Modal from './class/Modal';

import Character from './class/Character';

const game = {
  settings: {
    hero: new Hero(),
    board: new Board()
  },

  init: function () {
    console.log('Le jeu est prêt !');
    tippy('[data-tippy-content]', { theme: 'custom' });
    
    // this.settings.hero.changeLife(this.settings.hero.maxLife / -2);
    // new Modal('Jambe cassée', 'Vous démarrez le jeu avec 50% de points de vie en moins');
  }
}
game.init();