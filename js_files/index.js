window.onload= function(){
    check_local()
}

function check_local(){
   
    if(localStorage.getItem('current_user')){
        data=JSON.parse(localStorage.getItem('current_user'));
        document.querySelector("#user").innerHTML = `Hello ${data.name}!`
        document.querySelector("#login").innerHTML = `Logout`
    }

}
