// function digitou(e){
//     console.log(e);
// };

function digitou(e){
    if(e.keyCode == 13){ //Enter
        let texto = document.getElementById('campo').value;
        alert(`Bem vindo(a) ${texto}`);
    }
};