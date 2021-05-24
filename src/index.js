import menu from '../menu.json';
import itemsMenu from '../src/tamplates/menu.hbs';

const galleryRef = document.querySelector('.js-menu')

const markup = itemsMenu(menu)
galleryRef.insertAdjacentHTML('beforeend', markup)