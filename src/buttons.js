// buttons.js
document.addEventListener('DOMContentLoaded', () => {
    const topRow = document.getElementById('top-row');
    const content = document.getElementById('content');

  
    const buttons = [
      { id: 'Home', content: "Venite al nostro splendido ristorante, la cordialità del personale, il confort dell'ambiente e la squisitezza del menù vi stupiranno !!" },
      { id: 'Menu', content: 'PRIMI PIATTI: Penne alla amatriciana, penne alla boscaiola' },
      { id: 'Contatti', content: 'Tel. 0333-0909090; Fax 0333-090901; email: sders@hjgjg.com' }
    ];
  
    buttons.forEach(button => {
      const btnElement = document.createElement('button');
      btnElement.textContent = button.id;
      btnElement.onclick = () => {
        content.innerHTML = `<h2>${button.id}</h2><p>${button.content}</p>`;
      };
      topRow.appendChild(btnElement);
    });
});