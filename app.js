var input = document.getElementById("input")
function formsubmit(){
    var error = document.getElementById("error");
    if(input.value.length < 3){
        input.style.outline = "none";
        input.style.border = "2px solid red";
        error.style.display = "block";

    }else{
        error.innerHTML = "FORM SUBMITTED";
        error.style.display = "block";
        error.style.color = "green";

    }
}


function show(){
    input.type = "text"
}
function hide(){
    input.type = "password"
}