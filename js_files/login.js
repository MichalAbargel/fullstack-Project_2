window.onload= function(){
    declearViewEvente();
    
}

function declearViewEvente(){
    let user = document.getElementById("username");
    let userPassword = document.getElementById("password");
    let log_in = document.querySelector("#login");

    log_in.addEventListener("click", function(){
        user_name = user.value;
        user_password = userPassword.value;
        if(localStorage.getItem("user_name") === user_name){
            if (localStorage.getItem("user_password")=== user_password){
                alert("welcome back!");
                window.open(
                    "../html_files/index.html", "_blank");
            }
            else{
                alert("password is not correct!")
            }
        }
        else {
            alert("you need to sign in");

        }
        
        
    })
}

