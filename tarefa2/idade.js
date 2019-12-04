let idade = document.querySelector('#idade');
let maiorlb = document.querySelector('#maior');
let menorlb = document.querySelector('#menor');
let lista = document.querySelector('#lista')
let idades = new Array;




document
    .querySelector('#btnEnviar')
    .addEventListener('click', function(event) {
    adicionaVetor(idade.value);
    gravaNaLista(idade.value)


    });
    
    maiorlb.value = buscaMaior();
    menorlb.value = buscaMaior();


function buscaMaior(){
  return Math.max(idades);
        
}

function adicionaVetor(a){
    idades.push(a)  

}

function gravaNaLista(a){
  let itemLista = document.createElement("li");
  itemLista.value = a;

  itemLista.innerHTML = itemLista.appendChild(document.createTextNode(a) )
  
}


