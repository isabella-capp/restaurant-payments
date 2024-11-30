const productGrid = document.querySelector('.product-grid');

/*------------------------CREAZIONE PIZZE------------------------*/ 
document.addEventListener('DOMContentLoaded', function () {
    createPizza();
});

function crea(type, source, path, content, container, classe) {
    const generico = document.createElement(type);

    if (classe) {
        generico.classList.add(classe);
    }

    if (source && path) {
        generico.src = path + source;
        if (path.includes('vini') && type == 'img') {
            container.style.height = '220px';
            generico.style.height = '220px';
        }
    }

    if (content) {
        generico.innerHTML = content;
    }


    container.appendChild(generico);

    return generico;
}

function disponi(image, path, name, price, size) {

    for (let i = 0; i < size; i++) {
        const divProduct = crea('div', null, null, null, productGrid, 'product');
        const imageWrapper = crea('div', null, null, null, divProduct, 'img-wrapper');
        crea('img', image[i], path, null, imageWrapper, null);
        const paragraphWrapper = crea('div', null, null, null, divProduct, 'p-wrapper');
        crea('p', null, null, name[i], paragraphWrapper, 'namePizza');
        crea('p', null, null, price[i], paragraphWrapper, 'pricePizza');

        productGrid.appendChild(divProduct);
    }
}


function createPizza() {
    const imgPizze = ['margherita.webp', 'tonno.jpeg', '4stagioni.jpeg', 'bufala.jpeg', 'diavola.png', 'marinara.jpeg'];
    const nomiPizze = ['Margherita', 'Tonnara', 'Quattro stagioni', 'Bufala', 'Diavola', 'Marinara'];
    const prezziPizze = ['$6.00', '$10.00', '$10.00', '$8.00', '$8.50', '$5.50'];

    productGrid.innerHTML = '';

    disponi(imgPizze, 'Media/pizze/', nomiPizze, prezziPizze, imgPizze.length);
    addProductClickEvents();
}


function createPizzeBianche() {
    const imgPizze = ['bianca.avif', 'stria.jpeg', 'verdure.jpeg', 'striaconcrudo.webp'];
    const nomiPizze = ['Bianca', 'Stria', 'Verdure', 'Stria con crudo'];
    const prezziPizze = ['$5.50', '$3.50', '$9.00', '$6.50'];

    productGrid.innerHTML = '';

    disponi(imgPizze, 'Media/pizze/', nomiPizze, prezziPizze, imgPizze.length);
    addProductClickEvents();
}



function createSecondi() {
    const imgSecondi = ['cotoletta.avif', 'filetto.jpeg', 'insalata.avif', 'scaloppine.jpg', 'straccetti.jpeg', 'tagliata.avif'];
    const nomiSecondi = ['Cotoletta', 'Filetto', 'Insalatone', 'Scaloppine', 'Straccetti', 'Tagliata'];
    const prezziSecondi = ['$10.00', '$15.50', '$12.50', '$15.00', '$16.00', '$18.00'];

    productGrid.innerHTML = '';

    disponi(imgSecondi, 'Media/secondi/', nomiSecondi, prezziSecondi, imgSecondi.length);
    addProductClickEvents();
}

function createDolci() {
    const imgDolci = ['caffe.jpeg', 'fragole.avif', 'gelato.avif', 'limone.jpeg', 'tartufo.jpeg', 'pannacotta.avif'];
    const nomiDolci = ['Caffe', 'Fragole', 'Gelato', 'Limone', 'Tartufo', 'Pannacotta'];
    const prezziDolci = ['$2.00', '$6.00', '$6.00', '$6.00', '$6.00', '$6.00'];

    productGrid.innerHTML = '';

    disponi(imgDolci, 'Media/dolci/', nomiDolci, prezziDolci, imgDolci.length);
    addProductClickEvents();
}

function createBevande() {
    const imgBevande = ['cocacola.avif', 'fanta.avif', 'fuztea.avif'];
    const nomiBevande = ['Cocacola', 'Fanta', 'Fuztea'];
    const prezziBevande = ['$3.00', '$3.00', '$3.00'];

    productGrid.innerHTML = '';

    disponi(imgBevande, 'Media/bevande/', nomiBevande, prezziBevande, prezziBevande.length);
    addProductClickEvents();
}



function createPrimi() {
    const imgPrimi = ['brodo.jpeg', 'Garganelli.jpeg', 'gnocchi.jpeg', 'mirtillo.jpg', 'panna.avif', 'tagliolini.jpeg', 'tortelloni.webp', 'zucca.avif'];
    const nomiPrimi = ['Tortellini', 'Garganelli', 'gnocchi', 'Mirtillo', 'Panna', 'Tagliolini', 'Tortelloni', 'Zucca'];
    const prezziPrimi = ['$12.00', '$12.50', '$10.00', '$16.50', '$9.00', '$16.50', '$15.00', '$16.00'];

    productGrid.innerHTML = '';

    disponi(imgPrimi, 'Media/primi/', nomiPrimi, prezziPrimi, imgPrimi.length);
    addProductClickEvents();
}

function createAlcolici() {
    const imgAlcolici = ['amari.avif', 'campari.avif', 'heineken.jpeg', 'messina.jpeg', 'ichnusa.jpeg', 'ichnusapiccola.png', 'corona.jpg'];
    const nomiAlcolici = ['Amari', 'Campari', 'Heineken', 'Messina', 'Ichnusa', 'Ichnusa piccola', 'Corona'];
    const prezziAlcolici = ['$3.00', '$3.50', '$4.00', '$4.50', '$4.00', '$3.50', '$5.00'];

    productGrid.innerHTML = '';

    disponi(imgAlcolici, 'Media/bevande/', nomiAlcolici, prezziAlcolici, imgAlcolici.length);
    addProductClickEvents();

}

function createVini() {
    const imgAlcolici = ['bolgheri.jpeg', 'Cuvee.jpeg', 'extrawhite.jpeg', 'lagrein.jpeg', 'negroamaro.jpeg', 'pinot.jpeg', 'primadonna.jpeg'];
    const nomiAlcolici = ['Bolgheri', 'Cuvee', 'Extrawhite', 'Lagrein', 'Negroamaro', 'Pinot', 'Primadonna'];
    const prezziAlcolici = ['$20.00', '$25.50', '$30.00', '$30.50', '$40.00', '$45.00', '$45.00'];

    productGrid.innerHTML = '';

    disponi(imgAlcolici, 'Media/vini/', nomiAlcolici, prezziAlcolici, imgAlcolici.length);
    addProductClickEvents();

}

function createAntipasti() {
    const imgAntipasti = ['bresaola.avif', 'bruschette.avif', 'grissini.avif', 'perro.jpg', 'rosellina.jpg', 'tagliere.jpeg'];
    const nomiAntipasti = ['Bresaola', 'Bruschette', 'Grissini', 'Perro', 'Rosellina', 'Tagliere'];
    const prezziAntipasti = ['$10.00', '$6.50', '$5.50', '$5.50', '$9.00', '$5.50', '$20.00'];

    productGrid.innerHTML = '';

    disponi(imgAntipasti, 'Media/antipasti/', nomiAntipasti, prezziAntipasti, imgAntipasti.length);
    addProductClickEvents();
}

/* -------------------------MENU SECTION---------------------------*/

const sideBarButton = document.querySelectorAll('.button');
let activeIndex = 1;

document.querySelector('#Vini').onclick = () => {
    createVini();
    sideBarButton[activeIndex].classList.remove('active');
    sideBarButton[6].classList.add('active');
    activeIndex = 6;
}

document.querySelector('#Antipasti').onclick = () => {
    createAntipasti();
    sideBarButton[activeIndex].classList.remove('active');
    sideBarButton[0].classList.add('active');
    activeIndex = 0;
}

document.querySelector('#Pizze').onclick = () => {
    createPizza();
    sideBarButton[activeIndex].classList.remove('active');
    sideBarButton[1].classList.add('active');
    activeIndex = 1;
}

document.getElementById('Primi').onclick = () => {
    createPrimi();
    sideBarButton[activeIndex].classList.remove('active');
    sideBarButton[3].classList.add('active');
    activeIndex = 3;
}

document.getElementById('Secondi').onclick = () => {
    createSecondi();
    sideBarButton[activeIndex].classList.remove('active');
    sideBarButton[4].classList.add('active');
    activeIndex = 4;
}

document.getElementById('Bevande').onclick = () => {
    createBevande();
    sideBarButton[activeIndex].classList.remove('active');
    sideBarButton[5].classList.add('active');
    activeIndex = 5;
}

document.getElementById('Dessert').onclick = () => {
    createDolci();
    sideBarButton[activeIndex].classList.remove('active');
    sideBarButton[8].classList.add('active');
    activeIndex = 8;
}

document.getElementById('Alcolici').onclick = () => {
    createAlcolici();
    sideBarButton[activeIndex].classList.remove('active');
    sideBarButton[7].classList.add('active');
    activeIndex = 7;
}

document.getElementById('Pizze-bianche').onclick = () => {
    createPizzeBianche();
    sideBarButton[activeIndex].classList.remove('active');
    sideBarButton[2].classList.add('active');
    activeIndex = 2;
};


/* ------------------------ORDER SUMMARY ---------------------------*/
const screen = document.querySelector('.screen');

/*funzione per calcolare il totale*/
function calculateTotal(newPrice, operation) {
    var total = document.querySelector('.price').textContent;
    let currentTotalPrice = parseFloat(total.replace('$ ', ''));

    if (operation == 'add') {
        currentTotalPrice += newPrice;
    }
    else {
        currentTotalPrice -= newPrice;
    }

    document.querySelector('.price').textContent = `$ ${currentTotalPrice.toFixed(2)}`;

}

// Add style to the remaining children
function addStyleToRemainingChildren() {
    const children = screen.children;
    for (let i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = 'white';
    }
}

/*funzione per aggiungere la pizza selezionata allo screen*/
function addProductClickEvents() {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.onclick = () => {
            const name = product.querySelector('.namePizza').textContent;
            const priceString = product.querySelector('.pricePizza').textContent;
            const price = parseFloat(priceString.replace('$', ''));

            const productDiv = crea('div', null, null, null, screen, 'selected-product');
            crea('div', null, null, `${name}`, productDiv, 'name');
            crea('div', null, null, `${priceString}`, productDiv, 'priceString');

            addStyleToRemainingChildren();
            const lastChild = screen.lastElementChild;
            lastChild.style.backgroundColor = 'lightgray';

            calculateTotal(price, "add");

            screen.scrollTop = screen.scrollHeight;
        };
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const canc = document.getElementById('canc');
    if (canc) {
        canc.onclick = () => {
            const selectedProduct = document.querySelector('.selected-product');

            if (selectedProduct) {
                screen.removeChild(selectedProduct);
            }

            const price = parseFloat(selectedProduct.textContent.substring(selectedProduct.textContent.indexOf('$') + 1));

            calculateTotal(price, "remove");

        };
    } else {
        console.error('Delete button not found');
    }
});

const input_people = document.getElementById("num-persone");
const input_sconto = document.getElementById("sconto");
const input_contanti = document.getElementById("contanti");

let inputAttivo = null;

// Gestisce il focus sui campi di input per determinare quello attivo
[input_people, input_sconto, input_contanti].forEach(input => {
    input.addEventListener("focus", () => {
        inputAttivo = input;
    });
});

// Aggiunge il numero al campo di input attivo
document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        
        if (inputAttivo) {
            const number = button.textContent.trim();
            
            if (number === "," && !inputAttivo.value.includes(",")) {
                inputAttivo.value += number;
            } else if (number !== ",") {
                inputAttivo.value += number;
            }
        }
    });
});

// Cancella il contenuto dell'input attivo
document.getElementById("delete-input").addEventListener("click", () => {
    if (inputAttivo) {
        inputAttivo.value = "";
    }
});

// Calcolo del costo per persona
document.getElementById("divide").addEventListener("click", () => {
    const totalPrice = parseFloat(document.querySelector('.price').textContent.replace('$', ''));
    const people = parseInt(input_people.value);
    
    if (people && people > 0) { // Evita divisioni per zero
        const costPerPerson = totalPrice / people;
        document.querySelector('.label-total').textContent = `Totale per persona:`;
        document.querySelector('.price').textContent = `$ ${costPerPerson.toFixed(2)}`;
    } else {
        alert("Inserisci un numero valido di persone!");
    }
});

// Calcolo dello sconto
document.getElementById("sconta").addEventListener("click", () => {
    const totalPrice = parseFloat(document.querySelector('.price').textContent.replace('$', ''));
    const percentuale = parseInt(input_sconto.value);
    
    if (percentuale && percentuale >= 0) {
        const discountAmount = (totalPrice * percentuale) / 100;
        const finalTotal = totalPrice - discountAmount;
        document.querySelector('.price').textContent = `$ ${finalTotal.toFixed(2)}`;
    } else {
        alert("Inserisci una percentuale di sconto valida!");
    }
});

// Calcolo del resto dovuto
document.getElementById("resto").addEventListener("click", () => {
    const totalPrice = parseFloat(document.querySelector('.price').textContent.replace('$', ''));
    const contanti = parseFloat(input_contanti.value);
    
    if (contanti && contanti >= totalPrice) {
        const restoDovuto = contanti - totalPrice;
        document.querySelector('.label-total').textContent = `Resto dovuto:`;
        document.querySelector('.price').textContent = `$ ${restoDovuto.toFixed(2)}`;
    } else {
        alert("Assicurati di inserire una somma di contanti valida e sufficiente!");
    }
});

// Pulsante di cancellazione totale
const deleteButton = document.getElementById('delete-button');
deleteButton.onclick = () => {
    screen.innerHTML = '';
    document.querySelector('.price').textContent = `$ 0.00`;
    document.querySelector('.label-total').textContent = `Totale:`;
    input_people.value = "";
    input_sconto.value = "";
    input_contanti.value = "";
};

document.getElementById('back-button').addEventListener('click', () => {
    if (inputAttivo) {
        const currentValue = inputAttivo.value;
        inputAttivo.value = currentValue.slice(0, -1);
    }
});


/*---------------------------scontrino----------------------------------*/

// Add event listener to receipt button
document.getElementById('receipt-button').addEventListener('click', () => {
  //showReceipt();
  createPopup("Your order summary is:\n");
});

const body = document.querySelector('body');
// Function to create a new PopUp
function createPopup(text){
    const popup_Div = crea("div", null, null, null, body, "popup");

    const popup_content = crea("div", null, null, null, popup_Div, "popup-content");
    crea("p", null, null, text, popup_content, null);

    const selectedProducts = document.querySelectorAll('.selected-product');
    console.log(selectedProducts);

    selectedProducts.forEach(product => {
        const testo = product.innerHTML;
        crea("p", null, null, `${testo}`, popup_content, null);
      });

    const priceTotal = parseFloat(document.querySelector('.price').textContent.replace('$', ''));
    crea("p", null, null, `Totale: $ ${priceTotal} `, popup_content, 'final-price');

    const popup_button = crea("button", null, null, "OK", popup_content, "popupOkButton");
    popup_button.onclick = function() {
        body.removeChild(body.lastChild);
    };
}
