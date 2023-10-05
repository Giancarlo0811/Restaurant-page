function createAboutPage() {
    const content = document.querySelector('#content');

   // about
   const about = document.createElement('div');
   about.classList.add('about');
   content.appendChild(about);

   const aboutTitle = document.createElement('h1');
   aboutTitle.classList.add('title');
   aboutTitle.textContent = 'Sobre Nosotros';
   about.appendChild(aboutTitle);

   const text = document.createElement('p');
   text.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit suscipit quasi aut laborum amet omnis doloribus aliquam ducimus doloremque perspiciatis.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, facere qui id neque rem reprehenderit atque pariatur voluptas distinctio eum. Itaque repellat natus officiis fuga iure commodi aspernatur sed est!';
   about.appendChild(text);

   const contact = document.createElement('div');
   contact.classList.add('contact');
   about.appendChild(contact);

   for (let i = 0; i < 3; i++) {
    const p = document.createElement('p');
    p.classList.add('info');
    contact.appendChild(p);
   }

   contact.children[0].textContent = 'Dirección: Av. Lorem ipsum dolor, calle Lorem ipsum dolor';
   contact.children[1].textContent = 'Teléfono: 0123-4567890';
   contact.children[2].textContent = 'Correo: restaurant@correo.com';
}

export default createAboutPage; 