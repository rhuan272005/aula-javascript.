const buttonElement = document.getElementById('checkButton');
buttonElement.addEventListener('click', function() {
    
    valor = document.getElementById('checkButton')
    valor.classList.add('button-red')
    if (valor >= 10){
        document.getElementById(resultado).value = valor
    } else if (valor <= 10) 
         document.getElementById('resultado').value = valor
//  valor.classList.add('button-red')
  valor.classList.add('button-green');
 
//  if (valor > 10){
//     document.getElementById(resultado).value = valor
//  } else (valor < 10) 
//  valor.classList.add('button-green');


});
 



