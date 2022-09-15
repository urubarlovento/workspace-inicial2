productNumber= localStorage.getItem("prodID");
// let CATE_URL = `https://japceibal.github.io/emercado-api/cats_products/${productNumber}.json`;
let PRODUCT_INFO_URL_ESP = `https://japceibal.github.io/emercado-api/products/${productNumber}.json`;

// const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
let PRODUCT_INFO_COMMENTS_URL_ESP = `https://japceibal.github.io/emercado-api/products_comments/${productNumber}.json`;

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
    

function sendCommit(){
  
    textCommit = document.getElementById("cuerpo").value
       console.log(textCommit)
    
       console.log(userEmail)
       console.log(document.getElementById("stars").value)
    starsCommit = showStars(document.getElementById("stars").value)
       console.log(starsCommit)
    hoy = new Date()
    console.log(hoy)
       dateTimeCommit = hoy.toISOString().replace(/T/,' ').replace(/\..+/,'')
    console.log(dateTimeCommit)
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
        document.getElementsByClassName("container")[3].innerHTML += htmlContentToAppend4;      
    

 }

document.addEventListener("DOMContentLoaded", function(e){
    
    getUserEmail()

    getJSONData(PRODUCT_INFO_URL_ESP).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductInfoArray = resultObj.data
            console.log(currentProductInfoArray)
            showProductInfo()
        }})

    getJSONData(PRODUCT_INFO_COMMENTS_URL_ESP).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductComentsArray = resultObj.data
            console.log(currentProductComentsArray)
            showProductComents()
            }})

            document.getElementById("regCommit").addEventListener("click", function(){
                sendCommit ();
            });        


});

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
</div>

    
    `
    document.getElementsByClassName("container")[1].innerHTML = htmlContentToAppend
    imageArray = currentProductInfoArray.images
    let htmlContentToAppend2 = `<div class="row">
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">Imagenes ilustrativas</h4>
         </div>
    
         <div>

      

               <div class="card1"  style="flex-direction:row ">
               `
    for(let i = 0; i < imageArray.length; i++){
        let category = imageArray[i];

    htmlContentToAppend2 += `
                <div>
                 <img class=" card-img-prod" src=${currentProductInfoArray.images[i]}
                 alt="Imgagen representativa del producto ${currentProductInfoArray.name}">
                 </div>
    `
    }
    htmlContentToAppend2 += `
                            </div>
                            </div>
     

  
                            </main>`

        document.getElementsByClassName("container")[1].innerHTML += htmlContentToAppend2;



    }



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
            let stars = showStars(coment.score)
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
        `
        
            document.getElementsByClassName("container")[3].innerHTML += htmlContentToAppend3;       
    }




