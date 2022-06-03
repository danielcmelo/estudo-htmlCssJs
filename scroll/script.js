// document.querySelector('.texto').scrollTop - Verifica a posição do scroll vertical 
// document.querySelector('.texto').scrollLeft - Verifica a posição do scroll horizontal

// function subirTela() {
//     window.scrollTo(0, 0);//Essa funçã seta tanto o eixo y quanto o x
// }

function subirTela() {//scroll suave
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:"smooth"//behavior - comportamento / smooth - lento
    });
}

function desaparecerBotao(){
    if(window.scrollY == 0){
        document.querySelector('.scroll-button').style.display = 'hidden';
    }else{
        ocument.querySelector('.scroll-button').style.display = 'block';
    }
}

desaparecerBotao()