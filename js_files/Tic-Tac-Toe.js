window.addEventListener('DOMContentLoaded', () => {

    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');    
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
    let score = 0;
    if (localStorage["score_game_1"] != null){
      score = parseInt(localStorage["score_game_1"]);
    }
    let points = 10;

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;
    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }
    
        return true;
    };
    const updateBoard =  (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
        
    }

    const announce = (type) => {
        switch(type){
           case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
           case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
           case TIE:
                announcer.innerText = 'Tie';
            }
        announcer.classList.remove('hide');
    };

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
          const winCondition = winningConditions[i];
          const a = board[winCondition[0]];
          const b = board[winCondition[1]];
          const c = board[winCondition[2]];
          if (a === "" || b === "" || c === "") {
            continue;
          }
          if (a === b && b === c) {
            roundWon = true;
            score = score + points;
            localStorage["score_game_1"] = score
            updateHistory();
            break;
          }
        }
        if (roundWon) {
          announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
          isGameActive = false;
          return;
        }
      
        if (!board.includes("")) announce(TIE);
      }

      function updateHistory(){
        let current_user = localStorage.getItem('current_user');
        if (current_user == null) return;
        isFull = true;
        current_user = JSON.parse(current_user);
          for(let i=0; i< current_user.user_history.length; i++){
            if(current_user.user_history[i][0]=="Game"){
              current_user.user_history[i][0]= "Tic-Tac-Toe";
              current_user.user_history[i][1]= points;
              date = new Date(Date.now());
              current_user.user_history[i][2]= date.toUTCString();
              isFull=false;
              break;
            }
          }
          if(isFull){
            current_user.user_history[0][0] = "Tic-Tac-Toe";
            current_user.user_history[0][1]= points;
            date = new Date(Date.now());
            current_user.user_history[0][2]= date.toUTCString();
          }
        
        localStorage.setItem('current_user',JSON.stringify(current_user));
      }

      const userAction = (tile, index) => {
        if (isValidAction(tile) && isGameActive) {
          tile.innerText = currentPlayer;
          tile.classList.add(`player${currentPlayer}`);
          updateBoard(index);
          handleResultValidation();
          changePlayer();
        }
      };

      const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');
    
        if (currentPlayer === 'O') {
            changePlayer();
        }
    
        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

      tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

   

    resetButton.addEventListener('click', () => resetBoard());


  });