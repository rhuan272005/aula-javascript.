const VerificarItem = document.getElementById('numeroInput');
const resultadoMensagen = document.getElementById('resultadoMensagem');
console.log(resultadoMensagen.textContent)

    
    const buttonElement = document.getElementById('checkButton');
    buttonElement.addEventListener('click', function() {
    if (VerificarItem.value ==''){
      (alert('Digite um numero'))
      //alert('Obrigatório digitar o numero')
    } else if (VerificarItem.value < 10 ){ 
      resultadoMensagem.classList.add('button-red');
      resultadoMensagem.classList.remove('button-green');

    } else {
      resultadoMensagem.classList.add('button-green');
      resultadoMensagem.classList.remove('button-red');
      document.getElementById('resultadoMensagem').innerHTML = 'Esse numero é maior que 10'
      
      
      

    }
      




 

// const buttonElement = document.getElementById('checkButton');
// buttonElement.addEventListener('click', function() {
    
//     if (VerificarItem.value =='' ) {
//        VerificarItem.classList(alert('Digite o numero'))
//        //alert('digitar o numero é obrigatório!!!')
    
//     }else if (VerificarItem.value < 8 ) {
//         VerificarItem.classList.add('button-red');
//         VerificarItem.classList.remove('button-green');
        
//     } else {
        
//         VerificarItem.classList.add('button-green');
//         VerificarItem.classList.remove('button-red');
       
//     }
// })
      



//        valor.classList.add('button-red')
//  if (valor > 10){
//     document.getElementById(resultado).value = valor
//  } else (valor < 10) 
//  valor.classList.add('button-green');


});
 



