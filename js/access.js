document.addEventListener("DOMContentLoaded", function () {
    let queryString = window.location.search
    if (queryString != "") {
        validate(queryString.split('=')[1])
    }
});

const inputAccess = document.getElementById("accessCode")
inputAccess.addEventListener('input', enterCode);
function enterCode(){
    if (inputAccess.value.length == 4) {
        var response = validate(inputAccess.value)
        if (response == false){

            inputAccess.value = ""
        }
    }
 }


function validate(code){
    sessionStorage.setItem("code", code);
    switch (code) {
        case "2713":
            window.location.href = "album.html";
            return true;
            break;
    
        default:
            sessionStorage.removeItem("code");
            return false;
            //window.location.href = "index.html";
            break;
    }
}

