let form = document.querySelector('#form');

form.addEventListener('keyup', ()=>{
     let campoBuscarProdutos = document.querySelector('#campo-buscar-produtos');
     let dadosBuscados = campoBuscarProdutos.value.toLowerCase().trim();
     
     const todosCards = document.querySelectorAll('.items');
     
     todosCards.forEach(item => {
         let letrasDoCard = item.textContent.toLowerCase().trim();
         
         if (letrasDoCard.includes(dadosBuscados)) {
             item.style.display = 'block';
         } else {
             item.style.display = 'none';
         }
     });
})
