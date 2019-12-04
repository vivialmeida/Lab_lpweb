let quantidade = document.querySelector('#qtd');
let codigo = document.querySelector('#cod');
let campo_total= document.querySelector('#total');
let td_produtos = document.querySelectorAll('')



document.querySelector('#calcular').addEventListener(
    'click', function(event){
            event.preventDefault();
            setTotal();
    });


function calcula(){
 return (quantidade.valueAsNumber * codigo.valueAsNumber);
}
  

function setTotal(){
    campo_total.innerHTML ="R$ " + calcula();
    encontrarCodigo();

}


function encontrarCodigo(){

    // console.log (td_produtos.length)
   td_produtos.forEach(element => {
       if(element.textContent = codigo.value){
           console.
       }
       
   });
 };

        






