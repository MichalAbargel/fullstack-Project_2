window.onload = function(){
    check_local();
    updateScore();
}

function updateScore(){

    let valScore1;
    let valScore2;
    if (localStorage.getItem("score_game_1") != null){
        valScore1 = parseInt(localStorage["score_game_1"]);
        let score = document.getElementById("score-num-game1");
        score.innerHTML = `${localStorage["score_game_1"]}`;
    }
    else{
        valScore1 = 0;
    }

    if(localStorage.getItem("score_game_2") != null){
        valScore2 = parseInt(localStorage["score_game_2"]);
        let score = document.getElementById("score-num-game2");
        score.innerHTML = `${localStorage["score_game_2"]}`;
    }
    else{
        valScore2 = 0;
    }

    //change stars - rating
    let starsIndex = 0;
    let starsList = [];
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
function check_local(){
   
    if(localStorage.getItem('current_user')){
        data=JSON.parse(localStorage.getItem('current_user'));
        document.querySelector("#user").innerHTML = `Hello ${data.name}!`
        document.querySelector("#login").innerHTML = `Logout`
    }

}