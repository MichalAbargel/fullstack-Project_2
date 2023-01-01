window.onload= function(){
    declearViewEvente();
    
}

function declearViewEvente(){
    let user = document.getElementById("username");
    let userPassword = document.getElementById("password");
    let sign_in = document.querySelector("#signIn_btn");

    sign_in.addEventListener("click", function(){
        user_name = user.value;
        user_password = userPassword.value;
        //if(localStorage.getItem("user_name")== user_name){
        if(localStorage.getItem(user)){

            alert("you are already in");
            window.open(
                "../html_files/login.html", "_blank");
        }
        else{
            let addUser={
                name:user_name,
                password:user_password,
                login_Attempts:3,
            };
            localStorage.setItem(user_name,JSON.stringify(addUser));
            // localStorage.setItem("user_name",user_name);
            // localStorage.setItem("user_password",user_password);
            alert("welcome!")
            window.open(
                "../html_files/login.html", "_blank");
        }
        
        
    })
}

