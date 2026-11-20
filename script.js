(function () {
    // Elementos usados pelo menu
    var hamburgerBtn = document.getElementById('hamburger-btn');   // botão do header
    var sidebar = document.getElementById('sidebar');         // menu lateral 
    var overlay = document.getElementById('menu-overlay');    // fundo escuro
    var closeBtn = document.getElementById('sidebar-close');   // botão X dentro do menu
    var navLinks = sidebar.querySelectorAll('.sidebar-interact'); // links do menu
    var desktopQuery = window.matchMedia('(min-width: 993px)'); // tela cheirosa

    function openMenu() {
        sidebar.classList.add('open');
        overlay.classList.add('visible');
        document.body.classList.add('menu-open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        hamburgerBtn.setAttribute('aria-label', 'Fechar menu de navegação');
    }

    function closeMenu() {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
        document.body.classList.remove('menu-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.setAttribute('aria-label', 'Abrir menu de navegação');
    }

    hamburgerBtn.addEventListener('click', function () {
        if (sidebar.classList.contains('open')) {
            closeMenu();
        }
        else {
            openMenu();
        }
    });

    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    
    navLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
    desktopQuery.addEventListener('change', function (event) {
        if (event.matches) {
            closeMenu();
        }
    });
})
();