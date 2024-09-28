// buttons.js
document.addEventListener('DOMContentLoaded', () => {
    const topRow = document.getElementById('top-row');
  
    const buttons = [
      { id: 'a', url: 'paginaA.html' },
      { id: 'b', url: 'paginaB.html' },
      { id: 'c', url: 'paginaC.html' }
    ];
  
    buttons.forEach(button => {
      const btnElement = document.createElement('button');
      btnElement.textContent = button.id;
      btnElement.onclick = () => window.location.href = button.url;
      topRow.appendChild(btnElement);
    });
  });