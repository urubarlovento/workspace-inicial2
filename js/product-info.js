productNumber= localStorage.getItem("prodID");
// let CATE_URL = `https://japceibal.github.io/emercado-api/cats_products/${productNumber}.json`;
let PRODUCT_INFO_URL_ESP = `https://japceibal.github.io/emercado-api/products/${productNumber}.json`;

// const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
let PRODUCT_INFO_COMMENTS_URL_ESP = `https://japceibal.github.io/emercado-api/products_comments/${productNumber}.json`;

function setProdID(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html"
  }


// Función que pasa de un valor numerico a una cantidad de estrellas
function showStars(rate){
    if (rate == 1)
    return `
    <span style="color:yellow">★</span><span style="color:grey">☆☆☆☆</span>
    `
    if (rate ==2 )
    return `
    <span style="color:yellow">★★</span><span style="color:grey">☆☆☆</span>`
    if (rate ==3)
    return `
    <span style="color:yellow">★★★</span><span style="color:grey">☆☆</span>`
    if (rate == 4)
    return `
    <span style="color:yellow">★★★★</span><span style="color:grey">☆</span>`
    else
    return `
    <span style="color:yellow">★★★★★</span>`        
    }
    
// Función que agrega el nuevo comentario realizado cómo un comentario más de los mostrados referentes al producto
function sendCommit(){
  
    textCommit = document.getElementById("cuerpo").value
     
       console.log(document.getElementById("stars").value)
    starsCommit = showStars(document.getElementById("stars").value)
       console.log(starsCommit)
    hoy = new Date()
    console.log(hoy)
       dateTimeCommit = hoy.toISOString().replace(/T/,' ').replace(/\..+/,'')
    htmlContentToAppend4 = ` <div class="row">
    <div class="col">
            <div>
                <p><b>${userEmail}</b> - ${dateTimeCommit} - ${starsCommit}</p>
                <p>${textCommit}</p>
                </div>  
            <hr>
        </div>
        </div>
        `
        document.getElementsByClassName("container")[2].innerHTML += htmlContentToAppend4;      
    

 }


document.addEventListener("DOMContentLoaded", function(e){
    
    getUserEmail();

    // realiza la solicitud adecuada para obtener la información del producto
    getJSONData(PRODUCT_INFO_URL_ESP).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductInfoArray = resultObj.data;
            showProductInfo();
            showRelatedProducts();
        }})

    // realiza la solicitud adecuada para obtener los comentarios del producto
    getJSONData(PRODUCT_INFO_COMMENTS_URL_ESP).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductComentsArray = resultObj.data;
            showProductComents();
            }})

// Se establece la función sendCommit al boton del formulario mediante su ID
            document.getElementById("regCommit").addEventListener("click", function(){
                sendCommit ();
            });        


});

// Función que pega la información del producto descargada en el HTML
function showProductInfo(){

    let htmlContentToAppend = "";
    htmlContentToAppend = 
    htmlContentToAppend += `
    <main class="pb-5">
<div class="text-center p-4">
<h2>${currentProductInfoArray.name}</h2>
<hr>
</div>
<div class="row">
<div class="col">
    <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1">Precio</h4>
    </div>
    <p class="mb-1">${currentProductInfoArray.currency}${currentProductInfoArray.cost}</p>
</div>
</div>

<div class="row">
<div class="col">
    <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1">Descripción</h4>
    </div>
    <p class="mb-1">${currentProductInfoArray.description}</p>
</div>
</div>

<div class="row">
<div class="col">
    <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1">Categoría</h4>
    </div>
    <p class="mb-1">${currentProductInfoArray.category}</p>
    </div>
    </div>
    

    <div class="row">
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">Cantidad de vendidos</h4>
        </div>
        <p class="mb-1">${currentProductInfoArray.soldCount}</p>
</div>
</div>`;
    document.getElementsByClassName("container")[1].innerHTML = htmlContentToAppend;
    
    
    imageArray = currentProductInfoArray.images;
    let htmlContentToAppend2 = `
    <div class="carousel-item active col-auto">
    <img src="${currentProductInfoArray.images[0]}" class="d-block w-100" 
    alt="Imagen representativa del producto ${currentProductInfoArray.name}">
  </div>
`;
   
    for(let i = 0; i+1 < imageArray.length; i++){
        let category = imageArray[i];

    htmlContentToAppend2 += `
                 <div class="carousel-item">
                 <img src="${currentProductInfoArray.images[i+1]}" class="d-block w-100" 
                 alt="Imagen representativa del producto ${currentProductInfoArray.name}">
               </div>
    `
    }

        document.getElementById("containerImage").innerHTML = htmlContentToAppend2;};


// Función que pega todos los comentarios cargados desde el JSON
// debajo de la descripción y fotos del producto.

    function showProductComents(){
    let htmlContentToAppend3 = `
    <div class="row">
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h3 class="mb-1">Comentarios</h3>
        </div>
        <hr>`
       
        
        for(let i = 0; i < currentProductComentsArray.length; i++){
            let coment = currentProductComentsArray[i];
            let stars = showStars(coment.score);
            htmlContentToAppend3 += `
            <div>
                <p><b>${coment.user}</b> - ${coment.dateTime} - ${stars}</p>
                <p>${coment.description}</p>
                </div>  
            <hr>`
        }
        htmlContentToAppend3 += `
        </div>
        </div>
        `;
        
            document.getElementsByClassName("container")[2].innerHTML += htmlContentToAppend3;       
    }


    function showRelatedProducts(){
        relatedProductsArray =currentProductInfoArray.relatedProducts
        console.log(relatedProductsArray)
        let htmlContentToAppend4 = `
        <div onclick="setProdID(${relatedProductsArray[0].id})" class="cursor-active carousel-item active col-auto">
        <div class="card">
        <img class="card-img-top"src="${relatedProductsArray[0].image}" 
        alt="Imagen representativa del producto ${relatedProductsArray[0].name}">
        <div class="card-body">
              <h4 class="card-title">${relatedProductsArray[0].name}</h4>
      </div>
      </div>
      </div>
    `;
    for(let i = 0; i+1 < relatedProductsArray.length; i++){
        let relatedProduct = relatedProductsArray[i];

    htmlContentToAppend4 += `
                <div onclick="setProdID(${relatedProductsArray[i+1].id})"  class="cursor-active carousel-item col-auto">
                <div class="card">
                <img class="card-img-top"src="${relatedProductsArray[i+1].image}" 
                 alt="Imagen representativa del producto ${relatedProductsArray[i+1].name}">
                 <div class="card-body">
                 <h4 class="card-title">${relatedProductsArray[i+1].name}</h4>
                 </div>
             
           </div>
           </div>
    `
    }
        console.log(htmlContentToAppend4)
        document.getElementById("relatedProducts").innerHTML = htmlContentToAppend4

    }

