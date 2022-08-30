
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
        <p> Verás aquí todos los productos de la categoria ${currentCategoryArray.catName}
        </div>
        <div class="row">
        <div class="col text-end">
          <div class="btn-group btn-group-toggle mb-4" data-bs-toggle="buttons">
            <input type="radio" class="btn-check" name="options" id="sortAsc">
            <label class="btn btn-light" for="sortAsc">A-Z</label>
            <input type="radio" class="btn-check" name="options" id="sortDesc">
            <label class="btn btn-light" for="sortDesc">Z-A</label>
            <input type="radio" class="btn-check" name="options" id="sortByCount" checked>
            <label class="btn btn-light" for="sortByCount"><i class="fas fa-sort-amount-down mr-1"></i></label>
          </div>
        </div>
      </div>
      <div class="row">
      <div class="col-lg-6 offset-lg-6 col-md-12 mb-1 container">
        <div class="row container p-0 m-0">
          <div class="col">
            <p class="font-weight-normal text-end my-2">Cant.</p>
          </div>
          <div class="col">
            <input class="form-control" type="number" placeholder="min." id="rangeFilterCountMin">
          </div>
          <div class="col">
            <input class="form-control" type="number" placeholder="máx." id="rangeFilterCountMax">
          </div>
          <div class="col-3 p-0">
            <div class="btn-group" role="group">
              <button class="btn btn-light btn-block" id="rangeFilterCount">Filtrar</button>
              <button class="btn btn-link btn-sm" id="clearRangeFilter">Limpiar</button>
            </div>
          </div>
        </div>
      </div>
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