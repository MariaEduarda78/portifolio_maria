document.addEventListener('DOMContentLoaded', function() {

    
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('nav-menu');

    menuIcon.onclick = () => {
        
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-x');

        // Alterna a classe 'active' para mostrar/esconder o menu
        navbar.classList.toggle('active');
    };

    // 2. Fechar Menu ao Clicar em um Link (Mobile)
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-x');
                navbar.classList.remove('active');
            }
        });
    });

    // 3. Efeito de Máquina de Escrever (Typing Effect)
    const typingElement = document.querySelector('.animacao-texto span');
    const texts = ["Programadora Back-end", "Desenvolvedora Front-end", "Solucionadora de Problemas"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; 
    const deletingSpeed = 50; // ms
    const delayBetweenTexts = 2000; // ms

    function type() {
        const currentText = texts[textIndex];
        const fullText = currentText;

        if (isDeleting) {
            typingElement.textContent = fullText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = fullText.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === fullText.length) {
            speed = delayBetweenTexts;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 500; // Pequeno delay antes de começar a digitar o próximo
        }

        setTimeout(type, speed);
    }

    type(); // Inicia o efeito

    // 4. Seção Ativa na Navegação ao Scrollar
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        // Efeito de sombra no cabeçalho ao scrollar (opcional)
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 100);
    };

    // 5. Integração com ScrollReveal (Para um toque mais criativo de animação)
    // Para usar esta seção, você precisa descomentar o link para o ScrollReveal no index.html.
    /*
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .projetos-container', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .sobre-content', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .skills-box, .contato form', { origin: 'right' });
    */
});