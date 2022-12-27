window.onload = function(){
    updateScore();
}

function updateScore(){
    let score = document.getElementById("score-num");
    let starsIndex = 0;
    let starsList = [];
    if (localStorage.getItem("score_game_1") != null){
        score.innerHTML = `${localStorage["score_game_1"]}`
        valScore = parseInt(localStorage["score_game_1"]);
        if (valScore < 250){
            stars = parseInt(valScore / 50);
            starsList = document.querySelectorAll(".fa-star");
            for(let i=0; i < stars;i++){
                starsList[i].classList.add(`checked`);
            }
            localStorage["stars"] = starsIndex + 1;
        }
        document.getElementById("progress-score").value = parseInt(valScore);
    }
    
    
}