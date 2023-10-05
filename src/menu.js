import food1 from './images/food1.jpg';
import food2 from './images/food2.jpg';
import food3 from './images/food3.jpg';
import food4 from './images/food4.jpg';

function createMenuPage() {
    const content = document.querySelector('#content');
    
    // menu
    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('title');
    menuTitle.textContent = 'menú';
    menu.appendChild(menuTitle);

    // comidas
    for (let i = 0; i < 4 ; i++) {
        const div = document.createElement('div');
        div.classList.add('food');
        menu.appendChild(div);
    }

    const divs = document.querySelectorAll('.food');
    divs.forEach(div => {
        const coffeeName = document.createElement('h1');
        div.appendChild(coffeeName);
        const image = document.createElement('div');
        image.classList.add('image');
        div.appendChild(image);
        image.appendChild(document.createElement('img'));
        const p = document.createElement('p');
        p.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem provident dolore assumenda sequi neque est.';
        div.appendChild(p);
    })
    
    // nombres de las comidas
    divs[0].firstChild.textContent = 'Pollo a la brasa';
    divs[1].firstChild.textContent = 'Parrilla mixta';
    divs[2].firstChild.textContent = 'Espagueti';
    divs[3].firstChild.textContent = 'Paella';

    // imagenes de las comidas
    divs[0].children[1].firstChild.src = food1;
    divs[1].children[1].firstChild.src = food2;
    divs[2].children[1].firstChild.src = food3;
    divs[3].children[1].firstChild.src = food4;
}

export default createMenuPage; 