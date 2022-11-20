document.addEventListener("DOMContentLoaded", function(e){
    
    getUserEmail()
    // descarga el carrito del local storage
objCart= JSON.parse(localStorage.getItem("oldcart"));
// console.log(objCart)
currentCart_2= objCart

            showCart()
            subtotalcalc0()
            shippingValue()
            submitBuy.addEventListener("click", () => {totalVal ()});

});

// Esta funcion calcula el valor de los subtotales al cambiar los valores
function subtotalcalc(i){
    unitCost =parseInt(document.getElementById(`unitCost${i}`).textContent)
    // console.log(unitCost)
    countt = document.getElementById(`count${i}`).value
    // console.log(countt)
    let subVar = unitCost*countt 
    // console.log(subVar)
    let subVarText = `${subVar}`
    // console.log(subVarText)
    document.getElementById(`subtotals${i}`).innerHTML = subVarText

    subtotalcalct()
    shippingValue()
}



function showCart(){

    htmlContenttoAppendsubtotalt = ""
    let htmlContenttoAppend = ""
    let price = 0
    let priceAdder = 0

    for(let i = 0; i < currentCart_2.length; i++){
    
        let cart=currentCart_2[i];
        // console.log(cart)
        if (cart.currency == 'USD'){
            price = Math.round(cart.unitCost)}
            else{
            price = Math.round(cart.unitCost/45)
            }
            // console.log(price)
            priceAdder += price;
            console.log(priceAdder)
    
    htmlContenttoAppend +=`
    <tr>
    <td class="tablecart" style="heigth:20px"><img src="${cart.image}"  width="90px" class="img-thumbnail th1"></td>
    <td class="tablecart">${cart.name}</td>
    <td class="tablecart unitCost">USD${" "}<span id="unitCost${i}">${price}</span></td>
    <td class="tablecart count"><input oninput="subtotalcalc(${i})"  class="quantity" min="0" max="1000" id="count${i}" maxlength="15" value =${cart.count} ="width : 30px; heigth : 10px"><div class="invalid-feedback">Debe seleccionar una cantidad correcta!</div></td>
    <td class="tablecart subtotals"><div>USD${" "}<span class=subtotalN id="subtotals${i}"></span></div></td>
    <td><button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i class="fa fa-trash"></i></button></td>

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
    // console.log(unitCost)
    countt = document.getElementById(`count${i}`).value
    // console.log(countt)
    let subVar = unitCost*countt 
    // console.log(subVar)
    let subVarText = `${subVar}`
    // console.log(subVarText)
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
    console.log(subtotalm)
    priceAdder += subtotalm;
    console.log(priceAdder)
    }
    htmlContenttoAppendsubtotalt =`
    <span id="subtotalcant" value =${priceAdder} >${priceAdder}</span></td>
    `
    document.getElementById("subT").innerHTML=htmlContenttoAppendsubtotalt 
}

// Esta funcion calcula el evio segun lo seleccionado
function shippingValue(){


let shippingpercent = 0
express.checked ? shippingpercent = 17:
premium.checked ? shippingpercent = 15:
standard.checked ? shippingpercent = 5:0;
console.log(shippingpercent)
let priceToApply =Number(document.getElementById("subtotalcant").textContent)
console.log(priceToApply)
let shippingprice = priceToApply*shippingpercent/100
console.log(shippingprice)
let totalPrice = shippingprice + priceToApply
console.log(totalPrice)

htmlContenttoAppendShippingValue =`
USD<span id="subShippingValue" value =${shippingprice} >${shippingprice}</span></td>
`

htmlContenttoAppendTotalPrice =`
USD<span id="subShippingValue" value =${totalPrice} >${totalPrice}</span></td>
`
document.getElementById("shippingCost").innerHTML=htmlContenttoAppendShippingValue
document.getElementById("totalTotal").innerHTML=htmlContenttoAppendTotalPrice


}
// Aqui sepremium establece el valor de todos los input fijos en una variable

//Tipo de envio
let express = document.getElementById("express")
let premium = document.getElementById("premium")
let standard = document.getElementById("standard")

// Direccion de envio
let street=document.getElementById("street")
let number=document.getElementById("number")
let corner =document.getElementById("corner")

// dentro del modal

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
let cerrar =document.getElementById("Cerrar")

//Boton de comprar
let submitBuy =document.getElementById("submit_buy")

//Arreglo de todos los input de cantidad
let quantities = document.getElementsByClassName("quantity")



// Esta funcion valida un input si el mismo tiene contenido
function checkEmptyInput(input){
    if(input.value.length == 0){
        input.classList.add("is-invalid")
        input.classList.remove("is-valid")
        }else{
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")
        }
        }

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

// Esta funcion recorre todas las cantidades y si estan vacias o son menores a cero las invalida
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
        if(tarjeta_radio.checked == true){
        cardNumber.removeAttribute("disabled");
        segCod.removeAttribute("disabled");
        expDate.removeAttribute("disabled");
        accountNumber.setAttribute("disabled");
        document.getElementById("paySelect").innerHTML= "Tarjeta de Crédito";
        }});
     creditCard.addEventListener("input",function(){
         if(tarjeta_radio.checked == true){
         cardNumber.setAttribute("disabled");
        segCod.setAttribute("disabled");
        expDate.setAttribute("disabled");
        accountNumber.removeAttribute("disabled");
        document.getElementById("paySelect").innerHTML= "Transferencia Bancaria";
        }});
        

}
// Esta funcion controla que controla todo al comprar
function totalVal () {
    checkDeliv()
    checkQuantity()
    checkDirection()

}