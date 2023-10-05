// restaurant.js


function createRestaurantHomePage() {
    const content = document.querySelector('#content');

   // home
    const home = document.createElement('div');
    home.classList.add('home');
    content.appendChild(home);
    const welcome = document.createElement('h1');
    welcome.setAttribute('id', 'welcome');
    welcome.textContent = 'Bienvenidos';
    home.appendChild(welcome);
    const title = document.createElement('h1');
    title.textContent = 'Restaurant';
    home.appendChild(title);
    const text = document.createElement('p');
    text.textContent = 'Siempre lo mejor';
    home.appendChild(text);

    
}

export default createRestaurantHomePage; 