const btnExp = document.querySelector('#btn-exp');
const menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir');
})

function btnconfig(){
    const btnConfig = document.getElementById('btn-config');
    if(btnConfig){
        alert('A opção de Configurações em breve estará disponível :D');
    }
}
