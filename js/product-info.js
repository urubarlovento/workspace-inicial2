productNumber= localStorage.getItem("prodID");
// let CATE_URL = `https://japceibal.github.io/emercado-api/cats_products/${productNumber}.json`;
let PRODUCT_INFO_URL_ESP = `https://japceibal.github.io/emercado-api/products/${productNumber}.json`;

// const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
let PRODUCT_INFO_COMMENTS_URL_ESP = `https://japceibal.github.io/emercado-api/products_comments/${productNumber}.json`;


document.addEventListener("DOMContentLoaded", function(e){
    
    getUserEmail()

    getJSONData(PRODUCT_INFO_URL_ESP).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductInfoArray = resultObj.data
            console.log(currentProductInfoArray)
            // currentProductsArray = currentCategoryArray.products
            showProductInfo()
        }})

    getJSONData(PRODUCT_INFO_COMMENTS_URL_ESP).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductComentsArray = resultObj.data
            console.log(currentProductComentsArray)
            // currentProductsArray = currentCategoryArray.products
            showProductComents()
            }})



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

    </main>
    `
    imageArray = currentProductInfoArray.images
    let htmlContentToAppend2 = `"<div class="row">
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">Imagenes ilustrativas</h4>
         </div>
    
         <div>
         <div class="container">
           <div class="row">
             <div class="col-md-4">
               <div class="card mb-4 custom-card"  style="flex-direction: row ">;
               `
    for(let i = 0; i < imageArray.length; i++){
        let category = imageArray[i];

    htmlContentToAppend2 += `
    
                 <img class="bd-placeholder-img card-img-top" src=${currentProductInfoArray.images[i]}
                 alt="Imgagen representativa del producto ${currentProductInfoArray.name}"><p class=wtf>.       .</p>
    
    `
    }
    htmlContentToAppend2 += `
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>      

                            </div>
                            </div>`

        document.getElementsByClassName("container")[1].innerHTML = htmlContentToAppend + htmlContentToAppend2;



    }

    function showStars(rate){
        if (rate == 1)
        return `
        <span style="color:yellow">★</span><span style="color:grey">★★★★</span>
        `
        if (rate ==2 )
        return `
        <span style="color:yellow">★★</span><span style="color:grey">★★★</span>`
        if (rate ==3)
        return `
        <span style="color:yellow">★★★</span><span style="color:grey>★★</span>`
        if (rate == 4)
        return `
        <span style="color:yellow">★★★★</span><span style="color:grey">★</span>`
        else
        return `
        <span style="color:yellow">★★★★★</p>`        
        }
        

    function showProductComents(){

        let htmlContentToAppend3 = "";

        htmlContentToAppend3 += `
    <div class="row">
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h3 class="mb-1">Comentarios</h3>
        </div>
        <hr>`
       
        let htmlContentToAppend4 = ""
        for(let i = 0; i < currentProductComentsArray.length; i++){
            let coment = currentProductComentsArray[i];
            let stars = showStars(coment.score)
            htmlContentToAppend4 += `
            <div>
            <p><b>t${coment.user}</b> - ${coment.dateTime} - ${stars}</p>
            <p>${coment.description}</p>
            <hr>
            </div> `
            

        }
        htmlContentToAppend5= `
        </div>
        </div>
        `
        
            document.getElementsByClassName("container")[1].innerHTML += htmlContentToAppend3+htmlContentToAppend4;
            inputcomment()        
    }

function inputcomment(){
let htmlContentToAppend5 = document.getElementsByClassName("container")[1].innerHTML
let htmlContentToAppend6 = "";
htmlContentToAppend5 =`
<div class="col">
<div class="d-flex w-100 justify-content-between">
    <h4 class="mb-1">Comentar</h4>
 </div>
 <form action="">
    <p class="mb-1">Tu opinion:</p> 
     <textarea id="cuerpo" name="cuerpo" rows="3" cols="60"></textarea>
     <br>
     <label for="stars">Tu puntuación:</label><br>
        <select name="stars">
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value = "4">4</option>
        <option value = "5">5</option>
        </select><br>

     <input type="submit" class="boton-send" value="Enviar"> </input>        
</form>
 <div>
 <br><br>
`
document.getElementsByClassName("container")[1].innerHTML += htmlContentToAppend5+htmlContentToAppend6
}    
