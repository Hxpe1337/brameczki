document.addEventListener('DOMContentLoaded', () => {
    // Funkcja do pokazywania sekcji i ukrywania innych
    function showSection(sectionId) {
        // Ukryj wszystkie sekcje
        document.querySelectorAll('.content-section').forEach((section) => {
            section.style.display = 'none';
        });
        
        // Pokaż wybraną sekcję
        document.querySelector(sectionId).style.display = 'block';
    }

    // Obsługa kliknięcia w linki nawigacji
    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Zapobiegaj domyślnemu zachowaniu
            const sectionId = link.getAttribute('href'); // Pobierz atrybut href
            
            // Usuń klasę active z wszystkich linków
            document.querySelectorAll('.nav-link').forEach((navLink) => {
                navLink.classList.remove('active');
            });

            // Dodaj klasę active do klikniętego linku
            link.classList.add('active');

            // Pokaż klikniętą sekcję
            showSection(sectionId);
        });
    });

    // Pokaż domyślną sekcję (opcjonalnie)
    showSection('#bramki'); // Dostosuj do ID twojej domyślnej sekcji
});


document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');
    
    menuIcon.addEventListener('click', () => {
        navUl.classList.toggle('active'); // Przełącz klasę, aby pokazać/ukryć nawigację
    });
});
