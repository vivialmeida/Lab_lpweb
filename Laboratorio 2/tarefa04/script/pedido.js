let quantidade = document.querySelector('#qtd');
let codigo = document.querySelector('#cod');
let campo_total= document.querySelector('#total');
let td_produtos = document.querySelectorAll('td')



document.querySelector('#calcular').addEventListener(
    'click', function(event){
            event.preventDefault();
            setTotal();
            limpaCampos();
    });


function calcula(){
    
 return parseFloat(encontrarValorPorCodigo()) * parseFloat(quantidade.valueAsNumber);

    
}
  

function setTotal(){
    campo_total.innerHTML ="R$ " + calcula();
    


}


function encontrarValorPorCodigo(){
    let valor;
    for(let i= 0; i<td_produtos.length; i++){
            if(td_produtos[i].textContent== codigo.valueAsNumber){
             valor = (td_produtos[i +1].textContent).replace(",", ".");
               parseFloat(valor);
               break;
            }
   }
   console.log(typeof(valor))
   return valor;
}

function limpaCampos(){
    quantidade.value = "";
    codigo.value = "";
}