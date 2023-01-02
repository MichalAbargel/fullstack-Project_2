window.onload = function(){
    check_local();
    setHistory();
}

function setHistory(){
    if(localStorage.getItem("current_user")){
        user = JSON.parse(localStorage.getItem("current_user"));
        tdGamesList = Array.from(document.querySelectorAll(".tdGame"));
        tdPointsList = Array.from(document.querySelectorAll(".tdPoints"));
        tdTimeLisrt = Array.from(document.querySelectorAll(".tdTime"));
        for(let i=0; i < user.user_history.length; i++){
            if(user.user_history[i][0] != "Game"){
                tdGamesList[i].innerHTML = `${user.user_history[i][0]}`;
                tdPointsList[i].innerHTML = `${user.user_history[i][1]}`;
                tdTimeLisrt[i].innerHTML = `${user.user_history[i][2]}`;
            }
        }

    }
}
function check_local(){
   
    if(localStorage.getItem('current_user')){
        data=JSON.parse(localStorage.getItem('current_user'));
        document.querySelector("#user").innerHTML = `Hello ${data.name}!`
        document.querySelector("#login").innerHTML = `Logout`
    }

}