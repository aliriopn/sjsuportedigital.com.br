document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do HTML que vamos usar
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Adiciona um 'ouvinte de evento' para o clique no botão do menu
    menuToggle.addEventListener('click', () => {
        // Alterna a classe 'active' no menu de navegação
        // Se a classe existe, ela é removida. Se não existe, é adicionada.
        navMenu.classList.toggle('active');
    });

    // Fecha o menu quando um item de navegação é clicado (útil para navegação em uma única página)
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove a classe 'active' para fechar o menu
            navMenu.classList.remove('active');
        });
    });
});