window.onload = function(){
    updateScore();
}

function updateScore(){

    if (localStorage.getItem("score_game_1") != null){
        let score = document.getElementById("score-num-game1");
        score.innerHTML = `${localStorage["score_game_1"]}`;
    }

    if(localStorage.getItem("score_game_2") != null){
        let score = document.getElementById("score-num-game2");
        score.innerHTML = `${localStorage["score_game_2"]}`;
    }

    //change stars - rating
    let starsIndex = 0;
    let starsList = [];
    valScore1 = parseInt(localStorage["score_game_1"]);
    valScore2 = parseInt(localStorage["score_game_2"]);
    allPoints = valScore1 + valScore2;
        if (allPoints < 250){
            stars = parseInt(allPoints / 50);
            starsList = document.querySelectorAll(".fa-star");
            for(let i=0; i < stars; i++){
                starsList[i].classList.add(`checked`);
            }
        }
        document.getElementById("score-num").innerHTML = `${allPoints}`;
        document.getElementById("progress-score-game_1").value = parseInt(valScore1);
        document.getElementById("progress-score-game_2").value = parseInt(valScore2);

}