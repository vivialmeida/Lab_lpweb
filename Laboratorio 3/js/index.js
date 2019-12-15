var campos = [
  document.querySelector('#nome'),
  document.querySelector('#n1'),
  document.querySelector('#n2'),
  document.querySelector('#n3'),
  document.querySelector('#freq'),
  document.querySelector("#situacao"),
  document.querySelector('#media'),
  document.querySelector('#pfinal'),


];

console.log(campos);  

var tbody = document.querySelector('table tbody');

//document.querySelector('.botao').addEventListener('click', function(event) {
document.querySelector('.form').addEventListener('submit', function(event) {
    
   event.preventDefault();
   
   var tr = document.createElement('tr');
   
   campos.forEach(function(campo) {
       
       var td = document.createElement('td');
       td.textContent = campo.value;
       tr.appendChild(td);
       console.log(campo);
   });
   
  // var tdSubTotal = document.querySelector("#media")
  // tdSubTotal.textContent = campos[1].value + campos[2].value+ campos[3]/3; 
  
  // tr.appendChild(tdSubTotal);
  
  // tbody.appendChild(tr);
  
  campos[0].value = '';
  campos[1].value = "";
  campos[2].value = "";
  campos[3].value = "";
  campos[4].value = "";
  campos[5].value = "";
  campos[6].value = "";
  campos[7].value = "";
  
  campos[0].focus();
   
});