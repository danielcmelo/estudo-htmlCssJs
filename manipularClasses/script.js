function verde() {
    limpar()
    document.getElementById('exemplo').classList.add('verde')
}

function vermelho() {
    limpar()
    document.getElementById('exemplo').classList.add('vermelho')
}

function azul() {
    limpar()
    document.getElementById('exemplo').classList.add('azul')
}

function limpar(){
    document.getElementById('exemplo').classList.remove('azul');
    document.getElementById('exemplo').classList.remove('verde');
    document.getElementById('exemplo').classList.remove('vermelho');
}