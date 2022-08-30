let userEmail = ''

function getUserEmail(){

    userEmail= localStorage.getItem("userEmailStorage");
    console.log(userEmail)
    if (userEmail != null){
    
        let htmlContentToAppend = `<a class="nav-link" href="my-profile.html">${userEmail}</a>`
        console.log(htmlContentToAppend)
        document.getElementById("userEmail").innerHTML = htmlContentToAppend
    }
    else{
        location.href = "login.html";
    }

        }
   
  


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