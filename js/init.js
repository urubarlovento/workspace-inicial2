const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
let userEmail = ''
let userPStr = ''
let userP = ''


let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Pega un campo en la barra de navegación con el email y a su vez es un link al perfil de usuario
function getUserEmail(){

  userPStr= localStorage.getItem("userP");
  console.log(userEmail)
  if (userPStr != null){
    userEmail= JSON.parse(localStorage.getItem("userP")).email;
      let htmlContentToAppend = `
      <div class="dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuUser" data-bs-toggle="dropdown" aria-expanded="false">
      ${userEmail}
      </a>
    
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuUser">
        <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
        <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
        <li><a class="dropdown-item" href="logout.html">Cerrar sesión</a></li>
      </ul>
    </div>
      `
      // console.log(htmlContentToAppend)
      document.getElementsByClassName("nav-item")[3].innerHTML = htmlContentToAppend
      // console.log(document.getElementsByClassName("nav-item")[3])
  }
  else{
      location.href = "login.html";
  }

      }

      //Esta funcion carga el usuario y lo convierte en un objeto
function loadUser(){
  userPStr= localStorage.getItem("userP");
  userP= JSON.parse(userPStr)

}
//Esta funcion actualiza el usuario en el LocalStarage
function actUser(){
  userPStr=JSON.stringify(userP)
  localStorage.setItem("userP", userPStr);

}
