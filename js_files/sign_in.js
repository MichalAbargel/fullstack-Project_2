window.onload= function(){
    declearViewEvente();
    
}

function declearViewEvente(){
    let user = document.getElementById("username");
    let mailAdd = document.getElementById("email");
    let sign_in = document.querySelector("#signIn_btn");

    sign_in.addEventListener("click", function(){
        user_name = user.value;
        user_mail = mailAdd.value;
        if(localStorage.getItem("user_name")== user_name){
            alert("you are already in");
        }
        else{
            localStorage.setItem("user_name",user_name);
            localStorage.setItem("mail_add",user_mail);
            alert("welcome!")
        }
        
        
    })
}

