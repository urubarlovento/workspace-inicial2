document.addEventListener("DOMContentLoaded", function(e){
    
    getUserEmail()
    loadUser()
    loadForm()
    runpictureChange ()
    saveP.addEventListener("click", function(){checkMandatoryCamps();})
});

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
    const file2 = document.getElementById('myfile')
    // Crea un objeto con el porpósito de leer datos desde objetos de tipo Blob (la imagen)
    const reader = new FileReader();

    if (pictnw) {
        // Si se creo un file, convierte la imagen a una URL de datos en base 64
      reader.readAsDataURL(pictnw);

    reader.addEventListener("load", function () {
        // Una vez que termino de cargarse la direccion del archivo pega la fuente de la imagen
        pictureP.src = reader.result;}, false);
  }}

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
    pictureP.src = userP.src
  }
  // Esta funcion actualiza los dato de usuario del perfil 
  function upLoadForm() {
    userP.email = email.value ;
    userP.nameP = nameP.value;
    userP.name2 = name2.value;
    userP.surname = surname.value;
    userP.surname2 = surname2.value;
    userP.phone = phone.value;
    userP.src = pictureP.src
    actUser()
  }
// Esta funcion verifica los campos obligatorios
function checkMandatoryCamps(){
    checkEmptyInput(email);
    email.addEventListener("input", function(e){checkEmptyInput(email)});

    checkEmptyInput(nameP);
    nameP.addEventListener("input", function(e){checkEmptyInput(nameP)});

    checkEmptyInput(surname);
    surname.addEventListener("input", function(e){checkEmptyInput(surname)});

    finalVer()
}

// Esta funcion comprueba si hay alguno error antes de mandar el formulario
//Luego actualiza el el local storage
function finalVer(){
  let succSave = `  
  <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Felicitaciones</h4>
  <p>Su perfil ha sido guradado correctamente.</p>
  <hr>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>` 
  let errorsave =`  
  <div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">Error</h4>
  <p>Debe llenar como mínimo los campos Email Nombre y Apellido.</p>
  <hr>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
  
 totMiss = document.getElementsByClassName("is-invalid")  
 if(totMiss.length ==0){
    document.getElementById("saveAlert").innerHTML = succSave;
    upLoadForm();
}else{
  document.getElementById("saveAlert").innerHTML = errorsave;
}
}