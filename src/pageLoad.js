import createRestaurantHomePage from './restaurant.js';
import createNavLinks from './navbar.js';

function initialLoad() {
    createNavLinks();
    createRestaurantHomePage();
}

export default initialLoad;