import tippy from 'tippy.js';

// On importe la Class Board
import Board from './class/Board';



const board = new Board();

console.log('Le jeu est prêt !');

tippy('[data-tippy-content]', { theme: 'custom' });
