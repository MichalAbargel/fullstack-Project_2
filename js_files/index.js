window.onload= function(){
    check_local()
}

function check_local(){
    // if(localStorage["user_name"]){
    //     document.querySelector("#user").innerHTML = `Hello ${localStorage["user_name"]}!`
    //     document.querySelector("#login").innerHTML = `Logout`
    // }
    if(localStorage.getItem(user_name)){
        json=localStorage.getItem(user_name);
        data=JSON.parse(json);
        document.querySelector("#user").innerHTML = `Hello ${user_name}!`
        document.querySelector("#login").innerHTML = `Logout`
    }

}
