import itemsMenu from './tamplates/menu.hbs';
import menu from './menu.json';


const galleryRef = document.querySelector('.js-menu')

const markUp = itemsMenu(menu)
galleryRef.insertAdjacentHTML('beforeend', markUp)