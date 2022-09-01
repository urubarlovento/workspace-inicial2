//ORDENAR SEGUN LOS CRITERIOS
const ORDER_DESC_BY_COST = "costDesc";
const ORDER_ASC_BY_COST = "costAsc";
const ORDER_DESC_BY_SOLDCOUNT = "desSoldCount";

let currentProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

function sortProducts(criteria, array){
  console.log(array)
    let result = [];
    if (criteria === ORDER_DESC_BY_COST)
    {
        result = array.sort(function(a, b) {
          let aCount = parseInt(a.cost);
          let bCount = parseInt(b.cost);

          if ( aCount > bCount ){ return -1; }
          if ( aCount < bCount ){ return 1; }
          return 0;
      });
       }
       
    
    else if (criteria === ORDER_ASC_BY_COST){
      result = array.sort(function(a, b) {
          let aCount = parseInt(a.cost);
          let bCount = parseInt(b.cost);

          if ( aCount > bCount ){ return 1; }
          if ( aCount < bCount ){ return -1; }
          return 0;
      });
  }
    
    else if (criteria === ORDER_DESC_BY_SOLDCOUNT)
    {
      
      result = array.sort(function(a, b) {
        if ( a.soldCount > b.soldCount ){ return -1; }
        if ( a.soldCount < b.soldCount ){ return 1; }
        return 0;
    });
    }

    return result;
}

//funcion que manda a ordenar el arreglo
function sortAndShowProducts(sortCriteria, productsArray){
  console.log(currentProductsArray)

  currentSortCriteria = sortCriteria;

  if(productsArray != undefined){
    currentProductsArray = productsArray ;
  }
  console.log(productsArray)
  currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);
  console.log(currentProductsArray)
  //Muestro los productos ordenados
  showProductsList();
}



function showProductsList(){

 
  let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
        ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))){

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
        </div>`


             
        document.getElementById("products-list-container").innerHTML = htmlContentToAppend;
        document.getElementById("products-sub-title").innerHTML = htmlContentToAppend2;   
}}
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
    //Le da valor a cada uno de los botones de filtro
    document.getElementById("pSortDesc").addEventListener("click", function(){
      sortAndShowProducts(ORDER_DESC_BY_COST);
  });
    document.getElementById("pSortAsc").addEventListener("click", function(){
      sortAndShowProducts(ORDER_ASC_BY_COST);
  });
    document.getElementById("sortBySoldCount").addEventListener("click", function(){
     sortAndShowProducts(ORDER_DESC_BY_SOLDCOUNT);
  });

  //Define la funcion de limpiar y muetra
  document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    minCount = undefined;
    maxCount = undefined;

    showProductsList();
  })


  //Asigna maximo y minimo para filtrar por cantidad de ventas de producto.
  document.getElementById("rangeFilterCount").addEventListener("click", function(){
   
    minCount = document.getElementById("rangeFilterCountMin").value;
    console.log(minCount)
    maxCount = document.getElementById("rangeFilterCountMax").value;
    console.log(maxCount)

    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
        minCount = parseInt(minCount);
    }
    else{
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
        maxCount = parseInt(maxCount);
    }
    else{
        maxCount = undefined;
    }

    showProductsList();
});

})