const listaSpesa = ['Caffè', 'Uova', 'Mele', 'Pasta', 'Cocacola'];

const listaSpesaDom = document.getElementById('lista-spesa');

let listItem = '';

let randomNumber = Math.floor((Math.random() * 255) + 1);


let i = 0;

while( i < (listaSpesa.length - 1)){

    const createItem =`<li>${listaSpesa[i]}</li>`;

    listItem += createItem

    i++
}

listaSpesaDom.innerHTML = listItem;

