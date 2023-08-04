const player = (playerName, sign) => {
  return { playerName, sign };
}

  const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const setFields = (index, sign) => {
      if (index >= board.length) return;
      board[index] = sign;
    };

    const getFields = (index) => {
      if (index > board.length) return;
      return board[index];
    };

    const reset = () => {
      for (let i = 0; i < board.length; i++) {
        board[i] = "";
      }
    };
  
    return {setFields,getFields, reset}
  })();

const displays = (() => {
  const winnerMessage = document.getElementById("message")
  /*   
      const restartButton = document.getElementById("restart-button"); */
      const finalMessage = document.getElementById("final")
  const restartButton = document.getElementById("restart-button");

  const fields = document.querySelectorAll("[data-field]");
  fields.forEach((field, index) => {
    field.addEventListener("click", () => {
      gameControlls.turns(index);
      gameControlls.updateGame();
    });
  });

  restartButton.addEventListener("click", () => {
    gameBoard.reset();
    displays.resetGame();
    gameControlls.updateGame();
  }); 

  const setResultMessage = (winner) =>{

    if (winner === "draw"){
      finalMessage.style.zIndex = "3";
      finalMessage.style.opacity = "0.8";
      winnerMessage.innerText = "It's a draw!"
    }else{
      finalMessage.style.zIndex = "3";
      finalMessage.style.opacity = "0.8";
      winnerMessage.innerText = winner + " has won!";
    }
  }

  const setMarker = (index, sign) => {
    gameBoard.setFields(index, sign);
  };

  const resetGame = () =>{
    finalMessage.style.zIndex = "-2";
    finalMessage.style.opacity = "0.0";
    winnerMessage.innerText = ""
    document.querySelector('[name="playerOne"]').value = ""
    document.querySelector('[name="playerTwo"]').value = ""
  }
    return{setMarker, setResultMessage, fields, resetGame}
})();

const gameControlls = (() => {
  let playerX, playerO;
  const submitNames = document.querySelector(".submit-names");
    submitNames.addEventListener("click", ()=> {
     playerX = player(document.querySelector('[name="playerOne"]').value, "✗");
     playerO = player(document.querySelector('[name="playerTwo"]').value, "ꙩ");
  turns()
  })
  let turnX = true
  let round = 1;
    
  const turns = (index) => {
    if (gameBoard.getFields(index) === "") {
      if (turnX === true) {
        displays.setMarker(index, playerX.sign);
        if(checkWinner()){
          displays.setResultMessage(playerX.playerName)
          return
        }
      } else {
        displays.setMarker(index, playerO.sign);
        updateGame();
        if(checkWinner()){
          displays.setResultMessage(playerO.playerName)
          return
        }
      }
    round++;
    if (round === 10) {
      displays.setResultMessage("draw");
    }
    updateGame();
    turnX = !turnX;
    }
  };

  const updateGame = () => {
    for (let i = 0; i < displays.fields.length; i++) {
      displays.fields[i].innerHTML = gameBoard.getFields(i);
    }
  };
  
  const checkWinner = () => {
      const winningConditions = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
      const currentPlayerSign = turnX ? playerX.sign : playerO.sign;
      
        return winningConditions.some((combination) =>
          combination.every((index) => gameBoard.getFields(index) === currentPlayerSign)
      );
  };
return {turns, checkWinner,  updateGame, playerX, playerO}
})()
