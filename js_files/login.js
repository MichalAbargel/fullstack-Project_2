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
        json=localStorage.getItem(user_name);
        data=JSON.parse(json);
        if(data==null){
            alert("you need to sign in");
            window.open(
                "../html_files/signIn.html", "_blank");

        }
        if(/*localStorage.getItem("user_name")*/data.name === user_name){
            if (/*localStorage.getItem("user_password")*/data.password === user_password){
                if(data.login_Attempts>0){
                 data.login_Attempts=3
                 localStorage.setItem(user_name, JSON.stringify(data))
                 localStorage.setItem('current_user', JSON.stringify(data))

                 alert("welcome back!");
                 window.open(
                    "../html_files/index.html", "_blank");
                }
                else{
                    alert("You have no attempts to access the website")
                }
            }
            else{
                if(data.login_Attempts>0){
                data.login_Attempts-=1
                localStorage.setItem(user_name, JSON.stringify(data))
                alert("password is not correct! you have only " +data.login_Attempts +" attempts!")
            }
            else{
                alert("You have no attempts to access the website");
            }
            }
        }
    })
}

