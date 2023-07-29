const tentativaInput = document.getElementById('tentativaInput');
const resultMessage = document.getElementById('resultMessage');


numeroSorteado = Math.floor(Math.random() * 100)

buttonElement = document.getElementById('checkButton');
buttonElement.addEventListener('click', function(){
    numero = tentativaInput.value
    console.log(numeroSorteado)
    console.log(numero)

    if (numero > numeroSorteado) {
        resultMessage.classList.add('result-error');
        document.getElementById('resultMessage').innerHTML = "ERROR'"

    } else if (numero == numeroSorteado) {
        resultMessage.classList.add('result-sucess');
        document.getElementById('resultMessage').innerHTML = "SUCCESS"

    } else {
        resultMessage.classList.add('result-fail');
        document.getElementById('resultMessage').innerHTML = "FAIL"
    }
})




























