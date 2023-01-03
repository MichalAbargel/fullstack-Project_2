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
        user_play = [["Game",0, Date.now()],["Game",0, Date.now()],["Game",0, Date.now()],["Game",0, Date.now()],["Game",0, Date.now()]]
        current_user = localStorage.getItem(user_name); 
        if(current_user != null){
            current_user = JSON.parse(current_user);
            if(current_user.name === user_name){

                alert("you are already in");
                window.open(
                    "../html_files/login.html", "_blank");
            }
        }        
        else{
            let addUser={
                name:user_name,
                password:user_password,
                login_Attempts:3,
                score_game_1: 0,
                score_game_2:0,
                user_history:user_play,
            };
            // setCookie('user_name',user_name, 180);
            localStorage.setItem(user_name, JSON.stringify(addUser));
            localStorage.setItem('current_user', JSON.stringify(addUser));
            alert("welcome!")
            window.open(
                "../html_files/index.html", "_blank");
        }

        function setCookie(cname, cvalue, time) {
            let date = new Date();
            date.setMinutes(date.getMinutes() + time);
            let expires = "expires=" + date.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        
    })
}



