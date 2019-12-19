let idade = document.querySelector('#idade');
let maiorlb = document.querySelector('#maior');
let menorlb = document.querySelector('#menor');
let lista = document.querySelector('#lista')
let qtdMaior;
let qtdMenor;


document
    .querySelector('#btnEnviar')
    .addEventListener('click', function(event) {
      event.preventDefault();
      comparaIdade();

    });


function comparaIdade(){
    if(idade.valueAsNumber<18){
      menorlb.valueAsNumber = (menorlb.valueAsNumber + 1) ;
    }else {
      maiorlb.valueAsNumber = (maiorlb.valueAsNumber + 1) ;
    } 
    idade.value= " ";   

}


