document.addEventListener('DOMContentLoaded', () => {
    // Para sa Hamburger Menu (Sidebar)
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const closeMenu = document.getElementById('close-menu');

    // Function para buksan ang sidebar
    hamburger.addEventListener('click', () => {
        navLinks.classList.add('active');
        navLinks.classList.remove('hidden');
        navLinks.classList.add('flex');
    });

    // Function para isara ang sidebar
    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('active');
        // Ibalik sa 'hidden' kapag sarado na para hindi ito makagulo
        setTimeout(() => {
            navLinks.classList.add('hidden');
            navLinks.classList.remove('flex');
        }, 300); // 300ms, kasing tagal ng CSS transition
    });
});