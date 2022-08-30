// Una vez cargada la página
// Se adjudica la función de comprobación al botón ingresar
// Pega un campo en la barra de navegación con el email y a su vez es un link al perfil de usuario
// Una vez cargada la página:
// Toma el email del usuario del Local Storage para ponerlo en la barra 
// Si no lo tiene re dirige a la página de login
// Luego carga las funciones de hacer click  sobre las categorías.

document.addEventListener("DOMContentLoaded", function(){
    
    getUserEmail()

    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});