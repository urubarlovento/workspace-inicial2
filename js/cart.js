document.addEventListener("DOMContentLoaded", function(e){
    
    getUserEmail()
    // descarga el carrito del local storage
objCart= JSON.parse(localStorage.getItem("oldcart"));
currentCart_2= objCart

            showCart()
            subtotalcalc0()
            shippingValue()
            submitBuy.addEventListener("click", () => {totalVal ()});
            dualForm ()
            cerrar.addEventListener("click", () => {payShowAlerts()});

});

// Esta funcion calcula el valor de los subtotales al cambiar los valores
function subtotalcalc(i){
    unitCost =parseInt(document.getElementById(`unitCost${i}`).textContent)
    countt = document.getElementById(`count${i}`).value
    let subVar = unitCost*countt 
    let subVarText = `${subVar}`
    document.getElementById(`subtotals${i}`).innerHTML = subVarText

    subtotalcalct()
    shippingValue()
}


//Esta funcion muestra el carrito del local storage
function showCart(){

    htmlContenttoAppendsubtotalt = ""
    let htmlContenttoAppend = ""
    let price = 0
    let priceAdder = 0

    for(let i = 0; i < currentCart_2.length; i++){
    
        let cart=currentCart_2[i];
        if (cart.currency == 'USD'){
            price = Math.round(cart.unitCost)}
            else{
            price = Math.round(cart.unitCost/45)
            }
            priceAdder += price;
    
    htmlContenttoAppend +=`
    <tr>
    <td class="tablecart" style="heigth:20px"><img src="${cart.image}"  width="90px" class="img-thumbnail th1"></td>
    <td class="tablecart">${cart.name}</td>
    <td class="tablecart unitCost">USD${" "}<span id="unitCost${i}">${price}</span></td>
    <td class="tablecart count"><input oninput="subtotalcalc(${i})"  class="quantity" min="0" max="1000" id="count${i}" maxlength="15" value =${cart.count} ="width : 30px; heigth : 10px"><div class="invalid-feedback">Debe seleccionar una cantidad correcta!</div></td>
    <td class="tablecart subtotals"><div>USD${" "}<span class=subtotalN id="subtotals${i}"></span></div></td>
    <td><button onclick="supElem(${i}, currentCart_2)"class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i class="fa fa-trash"></i></button></td>
    
    </tr>
    
    `
}
htmlContenttoAppendsubtotalt =`
USD<span id="subtotalcant" value =${priceAdder} >${priceAdder}</span></td>
`
document.getElementById("subT").innerHTML=htmlContenttoAppendsubtotalt 
document.getElementById("cartTable").innerHTML=htmlContenttoAppend
}

// Esta funcion me calcula el valor de los subtotales ya cargados
function subtotalcalc0(){
 
    for(let i = 0; i < currentCart_2.length; i++){

    let cart=currentCart_2[i];
    unitCost =parseInt(document.getElementById(`unitCost${i}`).textContent)
    countt = document.getElementById(`count${i}`).value
    let subVar = unitCost*countt 
    let subVarText = `${subVar}`
    document.getElementById(`subtotals${i}`).innerHTML = subVarText
    }

}

// ESta funcion calcula el sub total de todos los productos teniendo en cuenta el precio unitario y la cantidad de productos

function subtotalcalct(){
    subtotalArray = document.getElementsByClassName("subtotalN")

    let priceAdder = 0
 
    for(let i = 0; i < subtotalArray.length; i++){

    let subtotalm=Number(document.getElementById(`subtotals${i}`).textContent);
    subtotalm=(subtotalm)
    priceAdder += subtotalm;
    }
    htmlContenttoAppendsubtotalt =`
    <span id="subtotalcant" value =${priceAdder} >${priceAdder}</span></td>
    `
    document.getElementById("subT").innerHTML=htmlContenttoAppendsubtotalt 
}

// Esta funcion calcula el envio segun lo seleccionado
function shippingValue(){


let shippingpercent = 0
express.checked ? shippingpercent = 17:
premium.checked ? shippingpercent = 15:
standard.checked ? shippingpercent = 5:0;
let priceToApply =Number(document.getElementById("subtotalcant").textContent)
let shippingprice = priceToApply*shippingpercent/100
let totalPrice = shippingprice + priceToApply

htmlContenttoAppendShippingValue =`
USD<span id="subShippingValue" value =${shippingprice} >${shippingprice}</span></td>
`

htmlContenttoAppendTotalPrice =`
USD<span id="subShippingValue" value =${totalPrice} >${totalPrice}</span></td>
`
document.getElementById("shippingCost").innerHTML=htmlContenttoAppendShippingValue
document.getElementById("totalTotal").innerHTML=htmlContenttoAppendTotalPrice


}
// Aqui se establece el valor de todos los input fijos en una variable

//Tipo de envio
let express = document.getElementById("express")
let premium = document.getElementById("premium")
let standard = document.getElementById("standard")

// Direccion de envio
let street=document.getElementById("street")
let number=document.getElementById("number")
let corner =document.getElementById("corner")

// dentro del modal

//abrir el modal
let paySelect = document.getElementById("paySelect")

// Tarjeta de credito
// let tarjeta_radio = document.getElementById("tarjeta_radio")
let creditCard = document.getElementById("creditCard")
// let numero_tarjeta =document.getElementById("tarjeta")
let cardNumber =document.getElementById("cardNumber")
// let codseg =document.getElementById("codseg")
let segCod =document.getElementById("segCod")
// let vencimiento =document.getElementById("vencimiento")
let expDate =document.getElementById("expDate")

//Transferencia bancaria
// let transf_radio = document.getElementById("transf_radio")
let bankTrans = document.getElementById("bankTrans")
// let nrocuenta = document.getElementById("nrocuenta")
let accountNumber = document.getElementById("accountNumber")
// let cerrar =document.getElementById("Cerrar")
let cerrar =document.getElementById("cerrar")

//Boton de comprar
let submitBuy =document.getElementById("submit_buy")

//Arreglo de todos los input de cantidad
let quantities = document.getElementsByClassName("quantity")


// Estafuncion valida un input si el mismo tiene contenido y si es mayor a 0
function checkEmptyMayq(input){
    if(input.value.length !== 0 && input.value > 0){
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")

        }else{
        input.classList.add("is-invalid")
        input.classList.remove("is-valid")
        }
        }


// Esta funcion controla que una opcion de envio este seleccionada
function checkDeliv() {

    if(express.checked == false && premium.checked == false && standard.checked == false){
    
    document.getElementById("deliveryType").classList.add("is-invalid")
    document.getElementById("spStandard").style.color ="red"
    document.getElementById("spExpress").style.color ="red"
    document.getElementById("spPremium").style.color ="red"
  
    }else{
        document.getElementById("deliveryType").classList.remove("is-invalid")
        document.getElementById("spStandard").style.color ="black"
        document.getElementById("spExpress").style.color ="black"
        document.getElementById("spPremium").style.color ="black"
    }
    express.addEventListener("input", function(e){checkDeliv()});
    
    premium.addEventListener("input", function(e){checkDeliv()});
    
    standard.addEventListener("input", function(e){checkDeliv()});
}

// Esta funcion recorre todas las cantidades les asigna la funcion de verificar al esta cambiar de valor
function checkQuantity(){

 
    for(let i = 0; i < quantities.length; i++){
        let quantityn = quantities[i]
        checkEmptyMayq(quantityn)
        document.getElementsByClassName("quantity")[i].addEventListener("input", function(e){checkEmptyMayq(quantityn)});
    }
}
// Esta funcion verifica la direccion de envio
function checkDirection(){
    checkEmptyInput(street);
    street.addEventListener("input", function(e){checkEmptyInput(street)});

    checkEmptyInput(number);
    number.addEventListener("input", function(e){checkEmptyInput(number)});

    checkEmptyInput(corner);
    corner.addEventListener("input", function(e){checkEmptyInput(corner)});

}

// Esta funcion habilita un formulario o el otro de pago

function dualForm () {
    creditCard.addEventListener("input",function(){
        if(creditCard.checked == true){
        cardNumber.removeAttribute("disabled");
        segCod.removeAttribute("disabled");
        expDate.removeAttribute("disabled");
        accountNumber.setAttribute("disabled", "");
        paySelect.innerHTML= "Tarjeta de Crédito";
        cleanPayM ()
        }});

     bankTrans.addEventListener("input",function(){
         if(bankTrans.checked == true){
        cardNumber.setAttribute("disabled", "");
        segCod.setAttribute("disabled", "");
        expDate.setAttribute("disabled", "");
        accountNumber.removeAttribute("disabled");
        paySelect.innerHTML= "Transferencia Bancaria";
        cleanPayM ()
        }});
        

}
//Esta funcion limpia los campos al cambiar de modo de pago
function cleanPayM () {
    if(creditCard.checked == true){
        accountNumber.classList.remove("is-invalid")
        accountNumber.classList.remove("is-valid")

        accountNumber.value = "";

    }  
    if(bankTrans.checked == true){
        cardNumber.classList.remove("is-invalid")
        cardNumber.classList.remove("is-valid")
        cardNumber.value = "";

        segCod.classList.remove("is-invalid")
        segCod.classList.remove("is-valid")
        segCod.value = "";
        
        expDate.classList.remove("is-invalid")
        expDate.classList.remove("is-valid")
        expDate.value = "";
    }  

}


// Esta funcion verifica los campos de tarjeta o cuenta
function payIntVal () {

    if(creditCard.checked == true){
        checkEmptyInput(cardNumber)
        cardNumber.addEventListener("input", () => checkEmptyInput(cardNumber));
        checkEmptyInput(segCod)
        segCod.addEventListener("input", () => checkEmptyInput(segCod));
        checkEmptyInput(expDate)
        expDate.addEventListener("input", () => checkEmptyInput(expDate));


        accountNumber.classList.remove("is-invalid")
        accountNumber.classList.remove("is-valid")

        accountNumber.value = "";

    }  
    if(bankTrans.checked == true){
        checkEmptyInput(accountNumber)
        accountNumber.addEventListener("input", () => checkEmptyInput(accountNumber));


        cardNumber.classList.remove("is-invalid")
        cardNumber.classList.remove("is-valid")

        cardNumber.value = "";
        segCod.classList.remove("is-valid")
        segCod.classList.remove("is-valid")

        segCod.value = "";
        expDate.classList.remove("is-valid")
        expDate.classList.remove("is-invalid")

        expDate.value = "";
    }  

}

//Esta funcion muestra una alerta si no se llena todo el modo de pago
function payShowAlerts() {
    let errorMet =`  
    <div class="alert alert-danger" role="alert">
    <h4 class="alert-heading">Error</h4>
    <p>Debe llenar los campos del formulario de pago obligatorios para la forma de pago seleccionada.</p>
    <hr>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    let succMet = `  
    <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Felicitaciones</h4>
    <p>Campos de formulario de pago completados con éxito.</p>
    <hr>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    if (creditCard.checked == false && bankTrans.checked == false) {
        paySelect.classList.add("is-invalid")
        document.getElementById("payMetAlert").innerHTML = errorMet
    } else if (creditCard.checked == true && (cardNumber.value.length ==0 || segCod.value.length ==0 || expDate.value.length == 0)) {
        document.getElementById("payMetAlert").innerHTML = errorMet
    }else {
        paySelect.classList.remove("is-invalid")
        if (bankTrans.checked == true && (accountNumber.value.length ==0)){
        document.getElementById("payMetAlert").innerHTML = errorMet

    }else {
        document.getElementById("payMetAlert").innerHTML = succMet
    }}
}
// Esta funcion comprueba si hay alguno error antes de mandar el formulario
function finalVer(){
    let succbuy = `  
    <div class="alert alert-success" role="alert">
    <p>Has comprado con éxito.</p>
    </div>`
 totMiss = document.getElementsByClassName("is-invalid")  
 if(totMiss.length ==0){
    document.getElementById("payMetAlert").innerHTML = succbuy
 }
}

// Esta funcion controla todo al comprar
function totalVal () {
    checkDeliv()
    checkQuantity()
    checkDirection()
    payIntVal ()
    payShowAlerts()
    finalVer()
}

// Esta sube nuevamente el carro
function setcart(){
    currentCart_3=JSON.stringify(currentCart_2)
    localStorage.setItem("oldcart", currentCart_3);
        }


// Esta funcion elimina un elemento en un arreglo  y posicion determinados  
//guarda los cambios en el cart del local storage y reinicia la pagina para que se muestren los cambios

function supElem (i, pArray) {
    pArray.splice(i,1);
    setcart()
    location.href = "cart.html";

}
