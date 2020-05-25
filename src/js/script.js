// import tippy from 'tippy.js';
// tippy('[data-tippy-content]', {theme: 'custom'});

// On importe la Class Hero
import Hero from './class/Hero';
// On importe la Class Debug
import Debug from './class/Debug';

// On crée une nouvelle instance de la Class Hero.
// puis on lance la méthode init() qui se trouve dans class/Hero.js
let hero = new Hero(); 
hero.init();

// On crée une nouvelle instance de la Class Debug avec 2 paramètres.
// 1/ le texte à afficher dans le bouton
// 2/ la fonction à executer lorsque l'utilisateur clique sur le bouton
// -> Fichier: ./class/Debug.js
// -> ligne 2: export default class {
let btnHero = new Debug('New hero', changeHero);
// puis on lance la méthode init() qui se trouve dans class/Debug.js
// -> Fichier: ./class/Debug.js
// -> ligne 19: init() {
btnHero.init();

// Cette fonction est envoyée au bouton ici :
// ligne 18: let btnHero = new Debug('New hero', changeHero);
function changeHero() {
  // On supprime la référence du hero actuel = libération de la mémoire
  hero = null;
  // On crée une nouvelle instance de la Class Hero.
  // puis on lance la méthode init() qui se trouve dans class/Hero.js
  hero = new Hero();
  hero.init();
}