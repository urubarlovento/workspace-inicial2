//muestra una alerta de comprobación correcta
function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

//muestra una alerta de error.
function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}


//Ningún campo puede estar vacío.
    
function emptyfield (){
let fields = document.getElementsByTagName("input")

for (let field of fields) {
if (field.value==="") {
  return false
} 
}
return true
}


// Comprobación de que todos los campos estén llenos. 
//Ejecución de las funciones de fijar email, función con retardo de redirigir a index y mostrar una alerta de comprobación correcta. 
//Sino recarga la página con retardo y muestra una alerta de error.

function general_Valid () {
if(emptyfield()){
createUserP()
setUserEmail()
setTimeout (loginSuccess,1000);
showAlertSuccess();

}
else
{

setTimeout (reload,3000);
showAlertError();
}
}
// Re dirige a la página index
function loginSuccess (){
    
  setcart()//carga el carrito si el login es exitoso
location.href = "index.html";
}

// Re carga la página de login
function reload (){
location.href = "login.html";
}
// Guarda el email en el Local Storage
function setUserEmail(){
  userP = JSON.parse(localStorage.getItem("userP"));
  let userEmail = document.getElementById('email').value;
  userP.email = `${userEmail}`
  userPStr=JSON.stringify(userP)

  localStorage.setItem("userP", userPStr);
  

      }
 

//6. Se adjudica la función de comprobación al botón ingresar

regBtn.addEventListener("click", () => {
  
  general_Valid () 
  
})

 // Funcion que crea un usuario
  function createUserP(){
    
    let userP={
    userID:'', 
    nameP:'', 
    name2:'', 
    surname:'', 
    surname2:'', 
    email:'', 
    phone: ``,
    catID: 105, 
    src:'img/nadie.jpg'
    };
    userPStr=JSON.stringify(userP)
    localStorage.setItem("userP", userPStr);}

