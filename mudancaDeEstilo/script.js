function vermelho(){
    limpar()
    document.getElementById('titulo').classList.add('vermelho');
}

function azul(){
    limpar()
    document.getElementById('titulo').classList.add('azul');
}

function verde(){
    limpar()
    document.getElementById('titulo').classList.add('verde');
}

function limpar(){
    document.getElementById('titulo').classList.remove('azul');
    document.getElementById('titulo').classList.remove('verde');
    document.getElementById('titulo').classList.remove('vermelho');
}

function mostrarTelefone(elemento){
    elemento.style.display = 'none';
    document.getElementById('telefone').style.display = 'block';
}