import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu.js";
import createAboutPage from "./about.js";

function createNavLinks() {
    const content = document.querySelector('#content');

    //navbar
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    content.appendChild(navbar);

    const ul = document.createElement('ul');
    navbar.appendChild(ul);

    const links = ['Inicio', 'Menú', 'Nosotros'];
    for (let i = 0; i < links.length; i++) {
        const li = document.createElement('li');
        li.textContent = links[i];
        ul.appendChild(li);
    }

    // colocar id a los li
    ul.children[0].setAttribute('id', 'home');
    ul.children[1].setAttribute('id', 'menu');
    ul.children[2].setAttribute('id', 'about');

    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const about = document.querySelector('#about');

    // event listeners
    home.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    });
    menu.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });
    about.addEventListener('click', () => {
        clearContent();
        createAboutPage();
    });

}

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = content.children[1];
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createNavLinks;