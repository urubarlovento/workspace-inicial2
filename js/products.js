
function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentAutosArray.length; i++){
        let product = currentAutosArray[i];

            htmlContentToAppend += `
            <div onclick="setProdID(${product.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name}${' '}${product.currency}${' '}${product.cost}</h4>
                            <small class="text-muted">${product.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </div>
            `
        

        }
        let htmlContentToAppend2 =  `
        <div class="text-center p-4">
        <h2>Productos</h2>
        <p> Verás aquí todos los productos de la categoria ${currentProductsArray.catName}
        </div>`;
             
        document.getElementById("products-list-container").innerHTML = htmlContentToAppend2 + htmlContentToAppend;
    
}
const CONSCAR_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CONSCAR_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data
            console.log(currentProductsArray)
            currentAutosArray = currentProductsArray.products
            console.log(currentAutosArray)
            showProductsList()
        }
    });

});