document.addEventListener("DOMContentLoaded", function(e){
    
    getUserEmail()
    runpictureChange ()
    loadUser()
    loadForm()
    saveP.addEventListener("click", function(){finalVer();})
});

// esta funcion es de boostrap y autentifica los formularios
(function(){'use strict';var forms = document.querySelectorAll('.needs-validation');Array.prototype.slice.call(forms).forEach(function(form){form.addEventListener('submit',function(event){if(!form.checkValidity()){event.preventDefault(); event.stopPropagation()}form.classList.add('was-validated')}, false)})})()
//variables a utilizar
let pictureP = document.getElementById('photoP')
let pictNew = document.getElementById('pictNew')
let nameP = document.getElementById('nameP')
let name2 = document.getElementById('name2')
let surname = document.getElementById('surname')
let surname2 = document.getElementById('surname2')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let saveP = document.getElementById('saveP')





//Esta funcion cambia la foto de perfil
function pictureChange () {
    //indica la ubicacion de la imagen a subir
    const pictnw = document.querySelector('input[type=file]').files[0];
    console.log(pictnw)
    const file2 = document.getElementById('myfile')
    console.log(file2)
    // Crea un objeto con el porpósito de leer datos desde objetos de tipo Blob (la imagen)
    const reader = new FileReader();
    console.log(reader)

    if (pictnw) {
        // Si se creo un file, convierte la imagen a una URL de datos en base 64
      reader.readAsDataURL(pictnw);
      console.log(pictnw)}

    reader.addEventListener("load", function () {
        // Una vez que termino de cargarse la direccion del archivo pega la fuente de la imagen
        pictureP.src = reader.result;}, false);
  }

  function runpictureChange () {
    pictNew.addEventListener("change",function(e){
        pictureChange()
  })}
  //Esta funcion pega todos los datos en el formulario
  function loadForm() {
    email.value = userP.email;
    nameP.value = userP.nameP
    name2.value = userP.name2
    surname.value = userP.surname
    surname2.value = userP.surname2
    phone.value = userP.phone
  }
  // Esta funcion actualiza los dato de usuario del perfil 
  function upLoadForm() {
    userP.email = email.value ;
    userP.nameP = nameP.value;
    userP.name2 = name2.value;
    userP.surname = surname.value;
    userP.surname2 = surname2.value;
    userP.phone = phone.value;
    actUser()
  }
// Esta funcion comprueba si hay alguno error antes de mandar el formulario
function finalVer(){
    // let succbuy = `  
    // <div class="alert alert-success" role="alert">
    // <p>Has comprado con éxito.</p>
    // </div>`
 totMiss = document.getElementsByClassName("is-invalid")  
 console.log(totMiss.length)
 if(totMiss.length ==0){
    console.log('bien hecho')
    // document.getElementById("payMetAlert").innerHTML = succbuy
    upLoadForm()
}else{console.log('mal hecho')}}