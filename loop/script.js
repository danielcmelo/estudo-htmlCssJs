//for loop
//for loop array


//3 etapas para o for
/*
1 - variavel auxiliar. i por exemplo. ela diz quantas vezes o for vai rodar
2 - condição
3 - Incrementação. i++
*/ 
// let texto = '';
// for (let i = 0; i <ul 50; i++) {
//     texto = texto + i + '</br>'
// }

// document.getElementById('demo').innerHTML = `${texto}`;

let carros = [
    'Ferrari',
    'Fusca',
    'Palio',
    'Corolla'
];

let html = '<ul>';

for(let i in carros){
    html += '<li>'+ carros[i] +'</li>'
}

html += '</ul>';//html = html + '</ul>'

document.getElementById('demo').innerHTML = `${html}`;