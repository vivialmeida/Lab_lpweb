let valor1 = document.querySelector('#numero1');
let valor2 = document.querySelector('#numero2');
let valor3 = document.querySelector('#numero3');
let valor4 = document.querySelector('#numero4');
let valor5 = document.querySelector('#numero5');
let cabecalho = document.querySelector('#cabecalho');
    

    // ATTACH EVENT
    document.getElementById (
        'btnRand'
    ).addEventListener ( 'click', calcularQuadrado );

    // GENERATOR
    function calcularQuadrado ()
    {
       function quadrado(a){
           return Math.pow(a,2);
        }


        let valoresInput = new Array(valor1.value, valor2.value,valor3.value, valor4.value, valor5.value);
       
        for (let i =0; i<5 ; i++){
       valoresInput[i] = quadrado(valoresInput[i]);

       }
        setarValores();

    for (let i =0; i<5 ; i++){
        console.log(valoresInput[i])
    }
    
    
    


    function setarValores(){  
    cabecalho.innerHTML = "Resultado!! "
    valor1.value = valoresInput[0];
    valor2.value = valoresInput[1];
    valor3.value = valoresInput[2];
    valor4.value = valoresInput[3];
    valor5.value = valoresInput[4];
       }
    }   