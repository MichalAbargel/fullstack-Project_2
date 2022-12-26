window.onload= function(){
    check_local()
}

function check_local(){
    if(localStorage["user_name"]){
        document.querySelector("#user").innerHTML = `Hello ${localStorage["user_name"]}!`
        document.querySelector("#login").innerHTML = `Logout`
    }
}
