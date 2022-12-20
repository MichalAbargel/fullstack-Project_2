window.onload= function(){
    declearViewEvente();
    
}

function declearViewEvente(){
    let sign_in = document.querySelector("#signIn_btn")
    sign_in.addEventListener("click", function(){
        localStorage.setItem("user_name", "Michal")
    })
}

