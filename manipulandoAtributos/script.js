function trocarImagem(fileName, animalName) {
    document.querySelector('.imagem').setAttribute('src', 'images/' + fileName); //1 - qual o atributo trocar, 2 - o caminho, 3 - concateno com o parametro
    document.querySelector('.imagem').setAttribute('data-animal', animalName);
}

function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert(`O animal é um ${animal}`);
}