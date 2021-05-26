import menuGalerry from './menu.json';
import itemsMenu from './tamplates/menu.hbs';



const galleryRef = document.querySelector('.js-menu')

const markUp = itemsMenu(menuGalerry)
galleryRef.insertAdjacentHTML('beforeend', markUp)