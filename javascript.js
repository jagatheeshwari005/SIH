document.addEventListener('DOMContentLoaded', function () {
    // Toggle the hamburger menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    hamburgerMenu.addEventListener('click', function() {
        navbarMenu.classList.toggle('visible'); 
    });

    // Toggle search bar visibility
    const searchButton = document.querySelector('.search-button'); 
    if (searchButton) {
        searchButton.addEventListener('click', function () {
            document.getElementById('search-bar').classList.toggle('hidden');
        });
    }
});