document.addEventListener("DOMContentLoaded", function(e){
    getoutUserEmail()
}
)

function getoutUserEmail(){

    localStorage.removeItem("userEmailStorage");
    getUserEmail()
    }