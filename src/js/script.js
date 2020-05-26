// import tippy from 'tippy.js';
// tippy('[data-tippy-content]', {theme: 'custom'});

// On importe la Class Hero
import Hero from './class/Hero';
// On importe la Class Hero
import Board from './class/Board';
// On importe la Class Debug
import Debug from './class/Debug';
// On importe la Class Modal
import Modal from './class/Modal';

const game = {
  settings: {
    hero: new Hero(),
    board: new Board()
  },

  init: function () {
    console.log('Le jeu est prêt !');
  }
}
game.init();