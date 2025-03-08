
window.onscroll = function () {
    const navbar = document.getElementById("navbar");

    // Comprobar si el usuario ha desplazado hacia abajo
    if (window.scrollY > 50) {  // Ajusta el valor si es necesario
        navbar.classList.add("navbar-scrolled"); // Agregar la clase con el fondo
    } else {
        navbar.classList.remove("navbar-scrolled"); // Remover la clase cuando se vuelve arriba
    }
};


// Detectar el scroll y añadir la clase 'active' al li correspondiente
window.addEventListener("scroll", function () {
    // Seleccionamos las secciones y los elementos de la navbar
    const sections = document.querySelectorAll(".section");
    const navItems = document.querySelectorAll("ul#navbar li");  // Seleccionar todos los li dentro de la navbar

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Si la sección está en la zona visible del viewport
        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    // Añadir la clase 'active' al li correspondiente
    navItems.forEach(item => {
        const link = item.querySelector("a");  // Obtiene el enlace dentro del li
        link.classList.remove("active");  // Remueve la clase 'active' de todos los enlaces

        if (link.getAttribute("href").slice(1) === currentSection) {
            link.classList.add("active");  // Añade la clase 'active' al enlace correspondiente
        }
    });
});
