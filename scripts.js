/*Creo dos constantes, 
selecciono el documento 
y con getelementbyId selecciono el elemento.*/
const iconMenuElement = document.getElementById('icon-menu');
const headerMenuElement = document.getElementById('header-ul');
const textMenuElement = document.getElementById('header-text');

/*
Selecciono el elemento toggle
le digo que escuche el evento click y cuando haga click 
intercambia la clase a main-menu--show
*/
iconMenuElement.addEventListener('click', () =>{
    headerMenuElement.classList.toggle('header-ul--show');
});

iconMenuElement.addEventListener('click', () =>{
    textMenuElement.classList.toggle('header-text--hide');
})

