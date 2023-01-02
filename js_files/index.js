function declearViewEvente(){
const log_in=document.getElementById("#login");
  log_in.addEventListener("click", function(){
    if(document.getItem('current_user')){
        localStorage.removeItem('current_user')
        document.querySelector("#user").innerHTML = `Home`
        document.querySelector("#login").innerHTML = `Login`
        alert(`${data.name} you logout from the web!`)
    }
  })
}
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
