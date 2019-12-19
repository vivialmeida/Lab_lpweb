let bolo = document.getElementById("bolo");
let pastel = document.getElementById("pastel");
let torta = document.getElementById("torta");
let suco = document.getElementById("suco");
let refri = document.getElementById("refri");
let agua = document.getElementById("agua");
let nome = document.querySelector("#nome");

let soma = 0;
let itensConsumo = [];

document.getElementById("calcular").addEventListener('click',function(event){
	event.preventDefault();
	calcular();
});


function calcular(){
if (suco.checked == true) {
	soma += 4.0;
	itensConsumo.push("Suco");
}

if (refri.checked == true) {
	soma += 2.50;
	itensConsumo.push("Refrigerante");
}

if (agua.checked == true) {
	soma += 1.5;
	itensConsumo.push("Água");
}

if (bolo.checked == true) {
	soma += 3.5;
	itensConsumo.push("Bolo");
}

if (pastel.checked == true) {
	soma += 3;
	itensConsumo.push("Pastel");
}

if (torta.checked == true) {
	soma += 4;
	itensConsumo.push("Torta");
}

alert("Cliente: " + nome.value + "\n" +
		  "Valor a Pagar: " + soma  + "\n" +
		  "Itens Consumidos: {" + itensConsumo.join(', ') + "}");
}

