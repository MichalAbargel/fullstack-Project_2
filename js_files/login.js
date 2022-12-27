window.onload= function(){
    declearViewEvente();
    
}

function declearViewEvente(){
    let user = document.getElementById("username");
    let mailAdd = document.getElementById("email");
    let log_in = document.querySelector("#login");

    log_in.addEventListener("click", function(){
        user_name = user.value;
        user_mail = mailAdd.value;
        if(localStorage.getItem("user_name") === user_name){
            if (localStorage.getItem("mail_add")=== user_mail){
                alert("welcome back!");
            }
            else{
                alert("mail address is not correct!")
            }
        }
        else {
            alert("you need to sign in");

        }
        
        
    })
}

