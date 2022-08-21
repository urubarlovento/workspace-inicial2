function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}


//1. Ningún campo puede estar vacío.
    //a. generar una variable
function emptyfield (){
let fields = document.getElementsByTagName("input")

for (let field of fields) {
if (field.value==="") {
  return false
} 
}
return true
}



//2. La contraseña debe tener al menos 6 caracteres.

function passwordhigher6 () {
let pass1 = document.getElementById("password1")
if(pass1.value.length > 5)
{
return true
}
else{
return false
}
}

// 3. Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales.

function matchPassword() {  
  let pass1 = document.getElementById("password1").value;  
  let pass2 = document.getElementById("password2").value;  
  if(pass1 != pass2)  
  {   
    return false
  } else {  
    return true
  }  
}


//4. Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio."
function checkbox_mark() {
var checkbox_var = document.getElementById("terminos");
if (checkbox_var.checked === true){
  return true
} else {
   return false
}
}

//5. Comprobación de todos los chequeos del punto 1 al 4

function general_Valid () {
if(emptyfield()// && passwordhigher6() && matchPassword()&& checkbox_mark()
){
setTimeout (loginSuccess,1000);
showAlertSuccess();
}
else
{

setTimeout (reload,3000);
showAlertError();
}
}

function loginSuccess (){
location.href = "inicio.html";
}
function reload (){
location.href = "index.html";
}


//6. Add Event Listener

regBtn.addEventListener("click", () => {
  general_Valid () 
})

