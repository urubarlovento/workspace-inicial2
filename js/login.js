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
  setcart()
location.href = "index.html";
}

// Re carga la página de login
function reload (){
location.href = "login.html";
}
// Guarda el email en el Local Storage
function setUserEmail(){
  var userEmail = document.getElementById("email").value
  localStorage.setItem("userEmailStorage", userEmail);

      }
 

//6. Se adjudica la función de comprobación al botón ingresar

regBtn.addEventListener("click", () => {
  
  general_Valid () 
  
})



