const player = (playerName, sign) => {

  return { playerName, sign };

}

  const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];


    const setFields = (index, sign) => {
      if (index > board.length) return;
      board[index] = sign
    }

    const getFields = (index) => {
      return board[index]
    }

    const reset = () => {
      for (let i = 0; i < board.length; i++) {
        board[i] = "";
      }
    };
  
    return {setFields,getFields, reset}
  })();


  const displays = (() => {
    /* const winnerMessage = () => {
      if (winner === ""){
        
      const winnerMessage = document.querySelector(".winner")
  
      const restartButton = document.getElementById("restart-button");
      const finalMessage = document.querySelector("final")
      restartButton.addEventListener("click", ()=> {
        gameBoard.reset();
        gameControlls.resetGame();
        updateGameboard();
        return finalMessage
    })}
    else{ return finalMessage }
  } */

  const fields = document.querySelectorAll("[data-field]");
  fields.forEach((field, index) => {
    field.addEventListener("click", () => {
      gameControlls.turns(index);
      gameControlls.updateGame();
    });
  });
  console.log(fields)
/*   restartButton.addEventListener("click", (e) => {
    gameBoard.reset();
    gameControlls.resetGame();
    updateGame();
  }); */

    const setResultMessage = (winner) =>{
      if (winner === "draw"){
        finalMessage.style.display = "flex";
        winnerMessage.innerText = "It's a draw!"
      }else{
        finalMessage.style.display = "flex";
        winnerMessage.innerText = (`${PLAYER} has won!`);
      }
    }

    const setMarker = (index, sign) => {
      gameBoard.setFields(index, sign); 
    };

    return{setMarker, setResultMessage, fields}
  })();


  const gameControlls = (() => {
    const playerX = player(document.querySelector('[name="playerOne"]').value, "✗");
    const playerO = player(document.querySelector('[name="playerTwo"]').value, "ꙩ");
    let turnX = true
    let round = 1;
    
    const turns = (index) => {
      if (gameBoard.getFields(index) === "") {
        if (turnX === true) {
          displays.setMarker(index, playerX.sign);
          updateGame()
        } else {
          displays.setMarker(index, playerO.sign);
          updateGame();
        }
        turnX = !turnX; 
      }
    };

    const resetGame = () => {
      
      }

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
/*   const restartButton = displays.restartButton; */
  return {turns, checkWinner, resetGame, updateGame, playerX, playerO}
  })()

