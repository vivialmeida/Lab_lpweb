
let cabecalho = document.querySelector('#cabecalho');
let numeros = document.querySelectorAll('.inputs');
    

    // ATTACH EVENT
    document.getElementById (
        'calcular'
    ).addEventListener ( 'click', calcularQuadrado);

    // GENERATOR
    function calcularQuadrado ()
    {
       function quadrado(a){
           return Math.pow(a,2);
        }
 
        cabecalho.innerHTML = "Resultado!! "
         for (let i =0; i<numeros.length ; i++){
         numeros[i].valueAsNumber = quadrado(numeros[i].valueAsNumber);
        }
    }
