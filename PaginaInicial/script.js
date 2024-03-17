const btnExp = document.querySelector('#btn-exp');
const menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir');
})

function btnplanejamento(){
    const btnPlanej = document.getElementById('btn-planej');
    if(btnPlanej){
        alert('Falta pouco em breve a opção de Planejamento estará disponível :D');
    }
}

function btnconfig(){
    const btnConfig = document.getElementById('btn-config');
    if(btnConfig){
        alert('A opção de Configurações em breve estará disponível :D');
    }
}

function btnresultado(){
    const btnResult = document.getElementById('btn-resultado');
    if(btnResult){
        alert('A opção de Resultados em breve estará disponível :D');
    }
}
