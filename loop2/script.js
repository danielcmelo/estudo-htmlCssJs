let html = '';
let c = 0;

//while -> enquanto 
while(c < 10){
    html += `Número ${c} </br>`
    c++
}

//Utilizando o for
// for(let c = 1; c < 10; c++){
//     html += `Número ${c} </br>`
// }

document.getElementById('demo').innerHTML = html;
