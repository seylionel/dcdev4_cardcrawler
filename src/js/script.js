// import tippy from 'tippy.js';
// tippy('[data-tippy-content]', {theme: 'custom'});
import Hero from './class/Hero';
import Debug from './class/Debug';

let hero = new Hero(); 
hero.init();

let btnHero = new Debug('New hero', changeHero);
btnHero.init();

function changeHero() {
  hero = null;
  hero = new Hero();
  hero.init();
}

/*import characters from './data/characters.json';

/*var nomVariable1 = 'Texte';
var nomVariable2 = 1;
var nomVariable3 = false;

var nomVariable4 = [1, 2];

var nomVariable5 = {
  name: 'Zoe',
  lifeMax: 100,
  weapon: true,
  kill: function () {
    this.lifeMax = 0;
  }
};


console.log(nomVariable5);

// Object
nomVariable5;

// Objects property
nomVariable5.name = 'Lionel';
nomVariable5.firstName = 'Seymour';
nomVariable5.attack = 6;

// Objects method
nomVariable5.kill();
console.log('la :', nomVariable5);

console.log(nomVariable5.firstName+" "+ nomVariable5.name+' '+"n'a plus que "+(nomVariable5.lifeMax+ 5 ))


// Selectors
const elHero = document.querySelector('[data-hero]');
const elDebug = document.querySelector('[data-debug]');

// Add HTML button
elDebug.innerHTML += '<button class="button" data-debug-newHero>New hero</button>';

// Create a selector for the newly button
const elDebugNewHero = document.querySelector('[data-debug-newHero]');
// Add listener on the click event on the button
elDebugNewHero.addEventListener('click', newHero);

// Callback function when the user press the button
function newHero() {
  let randomHero =  Math.floor(Math.random() * characters.length);
  elHero.innerText = characters[randomHero].name;
}

//newHero();*/