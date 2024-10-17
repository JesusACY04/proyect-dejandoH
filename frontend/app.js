// app.js
const animales = [
    {
        nombre: 'Firulais',
        especie: 'Perro',
        edad: 'Cachorro',
        img: "img/di6gy0at4wg61.jpg",  // Cambiado de imgsrc a img
        descripcion: 'Un perro muy amigable.'
    },
    {
        nombre: 'Michi',
        especie: 'Gato',
        edad: 'Cachorro',
        img: 'img/gato1.jpg',  // Asegúrate de que el archivo esté en la carpeta correcta
        descripcion: 'Un gato muy juguetón.'
    }
];

const animalesContainer = document.querySelector('.animales');

function mostrarAnimales() {
    animales.forEach(animal => {
        const animalDiv = document.createElement('div');
        animalDiv.classList.add('animal');
        animalDiv.innerHTML = `
            <img src="${animal.img}" alt="${animal.nombre}">
            <h2>${animal.nombre}</h2>
            <p>${animal.descripcion}</p>
        `;
        animalesContainer.appendChild(animalDiv);
    });
}

mostrarAnimales();
