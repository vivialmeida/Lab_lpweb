let nome = document.querySelector("#nome")
let div_nomes_inseridos = document.querySelector("#nomes_div");

let nomes = new Array();
console.log("funfa");   
console.log("funfa");   
console.log("funfa");   
console.log("funfa");   
console.log("funfa");       

function adicionarNomeAoVetor(){
        
    nomes.push(nome.value);

    
};

function limparCampo(){
    nome.value = ""
};

function insertNomes(nome_passado){
    let paragrafo_nomes = document.createElement("p");
    for(let i=0; i<nome_passado.length; i++){
       paragrafo_nomes.appendChild(document.createTextNode(nome_passado[i]+" , "));
    }
    return paragrafo_nomes;
}

document
    .querySelector('#btnEnviar')
    .addEventListener('click', function(event) {
        event.preventDefault();
        adicionarNomeAoVetor();
        div_nomes_inseridos.innerHTML= insertNomes(nomes).innerHTML;
        limparCampo();

    });


document.querySelector('#btnInverter').addEventListener( 'click', function(){
    div_nomes_inseridos.innerHTML= insertNomes(nomes.reverse()).innerHTML;
})

