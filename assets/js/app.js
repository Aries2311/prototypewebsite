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

    // On-scroll animation
    const sections = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once it's visible to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Initialize Slick Carousel on both sections for mobile
    function initializeCarousels() {
        if(window.innerWidth <= 767) {
            $('.carousel-container').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true
            });
        }
    }

    // Destroy Slick Carousel on desktop
    function destroyCarousels() {
        if(window.innerWidth > 767 && $('.carousel-container').hasClass('slick-initialized')) {
            $('.carousel-container').slick('unslick');
        }
    }

    // Initial setup
    $(document).ready(function(){
        initializeCarousels();
    });

    // Re-initialize/destroy on window resize
    $(window).on('resize', function() {
        destroyCarousels();
        initializeCarousels();
    });
});