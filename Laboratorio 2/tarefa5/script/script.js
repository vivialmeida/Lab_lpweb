let data = document.getElementById("data");
let corpo = document.getElementById("js-divResultado");

function transformaDataEmExtenso(event) {
	event.preventDefault();
	corpo.innerHTML  = "<p>" + transformaData(data.value) +"</p>";
}

function transformaData(data) {
	let meses = [
		'Janeiro', 'Fevereiro', 'Março', 
		'Abril', 'Maio', 'Junho',
		'Julho', 'Agosto', 'Setembro',
		'Outubro', 'Novembro', 'Dezembro'
	];

	let dt = data.split('/');

	return dt[0] + ' de ' + meses[parseInt(dt[1]) - 1] + ' de ' + dt[2];
}