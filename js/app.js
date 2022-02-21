const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
//console.log(items, title, text);

const slideObject = [
    {
        immagine: 'img/01.jpg',
        titolo: 'Svezia',
        descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        immagine: 'img/02.jpg',
        titolo: 'Svizzera',
        descrizione: 'Lorem ipsum',
    },
    {
        immagine: 'img/03.jpg',
        titolo: 'Gran Bretagna',
        descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        immagine: 'img/04.jpg',
        titolo: 'Germania',
        descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam',
    },
    {
        immagine: 'img/05.jpg',
        titolo: 'Paradise',
        descrizione: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam',
    },
]
console.log(slideObject);

// recupero dal DOM i contenitori del carusel

const slider = document.getElementsByClassName('slider')[0];
//console.log(slider);

const slideWrapper = document.querySelector('.slide-wrapper');
//console.log(slideWrapper);

// recupero dal DOM i controlli del carusel e li appendo

const controlsWrapper = document.createElement('ol');
controlsWrapper.classList.add('controls-wrapper');
slider.append(controlsWrapper);
//console.log(controlsWrapper);

// recupero dal DOM i bottoni per le slide

const arrowUp = document.getElementsByClassName('arrow-up')[0];
const arrowDown = document.getElementsByClassName('arrow-down')[0];
//console.log(arrowUp, arrowDown);

// imposto una variabile contatore per impostare l'active

let activeElement = 0;

slideObject.forEach((elememt) => {

    const slideContent = elememt;
    console.log(slideContent);
})

function sliderItem ( {immagine, titolo, descrizione} ) {

}



// creo il ciclo per le immagini del carusel



// for (let i = 0; i < items.length; i++) {

//     //console.log(title[i]);

//     // creo elementi che andranno nel DOM 

//     const item = document.createElement('div');
//     //console.log(item);
//     const img = document.createElement('img');
//     //console.log(img);
//     const descWrap = document.createElement('div');
//     //console.log(descWrap);
//     const imgTitle = `<h3 class="title">${title[i]}</h3>`;
//     //console.log(imgTitle);
//     const imgText = `<p class="subtitle">${text[i]}</p>`;
//     //console.log(imgText);
//     const li = document.createElement('li');
//     //console.log(li);
//     const imgControl = document.createElement('img');
    
//     // src img

//     img.src = items[i];
//     imgControl.src =items[i];

//     // aggiungo classi agli elementi
    
//     item.classList.add('item');
//     descWrap.classList.add('desc-wrap');
//     li.classList.add('controls');

//     // metto gli elementi creati nel DOM
    
//     slideWrapper.append(item);
//     item.append(img, descWrap);
//     descWrap.innerHTML = imgTitle + imgText;
    
//     controlsWrapper.append(li);
//     li.append(imgControl);
    
// }

// recupero dal DOM gli elementi creati e inseriti e li metto in un array

const itemsSlide = [...document.getElementsByClassName('item')];
//console.log(itemsSlide);

// creo un array con la lista controlli img dal DOM e imposto active corrente

const previewSlide = [...document.getElementsByClassName('controls')];
//console.log(previewSlide);

previewSlide[activeElement].classList.add('active');

// aggiungo la classe active all'elemneto corrente

itemsSlide[activeElement].classList.add('active');

// ascoltare l'evento click

arrowDown.addEventListener('click', function() {
    
    if (activeElement < itemsSlide.length - 1) {

        // rimuovere la classe active 
        itemsSlide[activeElement].classList.remove('active');
        previewSlide[activeElement].classList.remove('active');
    
        // incrementare il contatore o diminuire
        activeElement++
    
        // aggiungere la classe active
        itemsSlide[activeElement].classList.add('active');
        previewSlide[activeElement].classList.add('active');

    }

})

arrowUp.addEventListener('click', function() {

    if (activeElement > 0 ) {

        // rimuovere la classe active 
        itemsSlide[activeElement].classList.remove('active');
        previewSlide[activeElement].classList.remove('active');

        // incrementare il contatore o diminuire
        activeElement--
        
        // aggiungere la classe active
        itemsSlide[activeElement].classList.add('active');
        previewSlide[activeElement].classList.add('active');
    }

})

// setto il ciclo per le preview slides

for (let i = 0; i < previewSlide.length; i++) {

    const controls = previewSlide[i];
    //console.log(controls);

    // aggiungo event listener per le preview 

    controls.addEventListener('click', function() {

        // tolgo active al preview

        itemsSlide[activeElement].classList.remove('active');
        previewSlide[activeElement].classList.remove('active');

        // setto contatore 

        activeElement = i

        // aggiungo active

        itemsSlide[activeElement].classList.add('active');
        previewSlide[activeElement].classList.add('active');

    })
    
}


