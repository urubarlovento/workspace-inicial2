document.addEventListener("DOMContentLoaded", function(e){
    
    getUserEmail()
    // descarga el carrito del local storage
objCart= JSON.parse(localStorage.getItem("oldcart"));
console.log(objCart)
currentCart_2= objCart

            showCart()
            subtotalcalc0()

});

// Esta funcion calcula el valor de los subtotales al cambiar los valores
function subtotalcalc(i){
    unitCost =parseInt(document.getElementById(`unitCost${i}`).textContent)
    console.log(unitCost)
    countt = document.getElementById(`count${i}`).value
    console.log(countt)
    let subVar = unitCost*countt 
    console.log(subVar)
    let subVarText = `${subVar}`
    console.log(subVarText)
    document.getElementById(`subtotals${i}`).innerHTML = subVarText
}



function showCart(){

    let htmlContenttoAppend = ""

    for(let i = 0; i < currentCart_2.length; i++){
    
        let cart=currentCart_2[i];

    htmlContenttoAppend +=`
    <tr>
    <td class="tablecart" style="heigth:20px"><img src="${cart.image}"  width="90px" class="img-thumbnail th1"></td>
    <td class="tablecart">${cart.name}</td>
    <td class="tablecart unitCost">USD${" "}<span id="unitCost${i}">${cart.unitCost}</span></td>
    <td class="tablecart count"><input oninput="subtotalcalc(${i})"  min="0" max="1000" id="count${i}" maxlength="15" value =${cart.count} ="width : 30px; heigth : 10px"></td>
    <td class="tablecart subtotals"><div id="subtotals${i}"></div></td>
    </tr>
    
    `
}
document.getElementById("cartTable").innerHTML=htmlContenttoAppend
}

// Esta funcion me calcula el valor de los subtotales ya cargados
function subtotalcalc0(){
 
    for(let i = 0; i < currentCart_2.length; i++){

    let cart=currentCart_2[i];
    unitCost =parseInt(document.getElementById(`unitCost${i}`).textContent)
    console.log(unitCost)
    countt = document.getElementById(`count${i}`).value
    console.log(countt)
    let subVar = unitCost*countt 
    console.log(subVar)
    let subVarText = `${subVar}`
    console.log(subVarText)
    document.getElementById(`subtotals${i}`).innerHTML = subVarText
    }

}


