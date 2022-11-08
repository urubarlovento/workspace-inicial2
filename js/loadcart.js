let userID2 = String(25801)
let CART_INFO_URL= `https://japceibal.github.io/emercado-api/user_cart/${userID2}.json`;

let getJSONData1 = function(url){
    let result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}

function setcart(){
    localStorage.setItem("oldcart", currentCart_2);
  
        }

document.addEventListener("DOMContentLoaded", function(e){    
    
    getJSONData1(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCart = resultObj.data
            currentCart_2=JSON.stringify(currentCart.articles)
        }})
        
    })