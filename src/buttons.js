// buttons.js
document.addEventListener('DOMContentLoaded', () => {
    const topRow = document.getElementById('top-row');
    const content = document.getElementById('content');
  
    const buttons = [
      { id: 'Home', content: 'Contenuto per Home' },
      { id: 'Menu', content: 'Contenuto per Menu' },
      { id: 'Contatti', content: 'Contenuto per Contatti' }
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