let bolo = document.getElementById("bolo");
let pastel = document.getElementById("pastel");
let torta = document.getElementById("torta");
let suco = document.getElementById("suco");
let refri = document.getElementById("bolo");
let agua = document.getElementById("bolo");
let nome = document.querySelector("nome");

let total;
let itensConsumo;

document.getElementById("calcular").addEventListener('click',cacular());

function calcular(){
if (suco.checked == true) {
	soma += 4.0;
	itensConsumidos.push("Suco");
}

if (refri.checked == true) {
	soma += 2.50;
	itensConsumidos.push("Refrigerante");
}

if (agua.checked == true) {
	soma += 1.5;
	itensConsumidos.push("Água");
}

if (bolo.checked == true) {
	soma += 3.5;
	itensConsumidos.push("Bolo");
}

if (pastel.checked == true) {
	soma += 3;
	itensConsumidos.push("Pastel");
}

if (torta.checked == true) {
	soma += 4;
	itensConsumidos.push("Torta");
}

alert("Cliente: " + nome.value + "\n" +
		  "Valor a Pagar: " + soma  + "\n" +
		  "Itens Consumidos: {" + itensConsumidos.join(', ') + "}");
}

