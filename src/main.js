document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i< buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton; //se obtiene el valor del botón pulsado
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`); //se busca el valor equivalente a nuestro boton en los shows
            escondeTodasAbas(); //le quita la clase active a cualquier shows
            aba.classList.add('shows__list--is-active'); //le añade nuestra clase active a nuestro show para mostrarlo
            removeBotaoAtivo();//le quita la clase active  cualquier boton
            botao.target.classList.add('shows__tabs__button--is-active');//le da la clase active a nuestro boton
        })
    }
})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i< buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas(){
    const tabsContainer= document.querySelectorAll('[data-tab-id]');

    for (let i=0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}