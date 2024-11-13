const menuToggle = document.querySelector('#menu-toggle');
const menuMobile = document.querySelector('#menu-mobile');
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuMobile.classList.toggle('max-h-[500px]');
});


const dropdownsMobile = document.querySelectorAll('#menu-mobile .dropdown');
dropdownsMobile.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdownsMobile.forEach(dropdown => dropdown.classList.remove('active'));
        dropdown.classList.toggle('active');
    });
});