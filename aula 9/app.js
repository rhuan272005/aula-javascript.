// const pageTitleElement = document.getElementById('pageTitle');
// console.log(pageTitleElement.textContent); // Saída: "Título da Página"

// const paragraphElement = document.getElementById('paragraph');
// paragraphElement.textContent = 'Novo parágrafo';

// const firstListItem = document.querySelector('li');
// console.log(firstListItem.textContent);
//      // Saída: "Item 1" 

// const listItems = document.querySelectorAll('li');
// listItems.forEach(item => console.log(item.textContent));
//      // Saída: "Item 1", "Item 2", "Item 3"  

// const buttonElement = document.getElementById('btnClick');
// console.log(buttonElement.getAttribute('id')); // Saída: "btnClick"

// buttonElement.setAttribute('disabled', true); // Desabilita o botao

// const pageTitleElement = document.getElementById('pageTitle')
// console.log(pageTitleElement.textContent)

// pageTitleElement.classList.add('red')

// pageTitleElement.classList.remove('red')

// pageTitleElement.classList.add('green')

// const listElement = document.getElementById('list');
// listElement.innerHTML += '<li>Item 4</li>';
//       // Adiciona um novo item á lista

// const paragraphElement = document.getElementById('paragraph');
// paragraphElement.innerHTML = '<strong>Texto em negrito</strong>';
//       // Altera o conteúdo do parágrafo

// 

const buttonElement = document.getElementById('btnClick');
buttonElement.addEventListener('click', function() {
    alert('Você clicou no botão!');
});