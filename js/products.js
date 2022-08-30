
function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

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
productNumber= localStorage.getItem("catID");
let CATE_URL = `https://japceibal.github.io/emercado-api/cats_products/${productNumber}.json`;

document.addEventListener("DOMContentLoaded", function(e){
    getUserEmail()

    getJSONData(CATE_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCategoryArray = resultObj.data
            currentProductsArray = currentCategoryArray.products
            showProductsList()
        }
    });

});