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
    const winnerMessage =document.querySelector(".winner")
    restartButton = document.getElementById("restart");
    const finalMessage = document.querySelector("final")
    restartButton.addEventListener("click", ()=> {
      gameBoard.reset();
      gameControlls.resetGame();
      updateGameboard();
    })

    const fields = document.querySelectorAll("[data-field]");
    fields.forEach((field) => {
      field.addEventListener("click", () => { //work on this when gamecontroller and round is set up
        gameControlls.turns()
      });
    });

    restartButton.addEventListener("click", (e) => {
      gameBoard.reset();
      gameControlls.resetGame();
      updateGame();
      setMessageElement("Player X's turn");
    });

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

    return{setMarker, setResultMessage}
  })();


  const gameControlls = (() => {
    const playerX = player(document.querySelector('[name="playerOne"]').value, "✗");
    const playerO = player(document.querySelector('[name="playerTwo"]').value, "ꙩ");
    let turnX = true
    const turns = () => {
      if (gameBoard.turnX === true) {
        field.innerText = gameBoard.playerX.sign;
        setMarker(index, playerX.sign);
        turnX = !turnX;
      } else {
        field.innerText = gameBoard.playerO.sign;
        setMarker(index, playerO.sign);
        turnX = !turnX;
      }
    }


    resetGame = () => {
      
      }

    const updateGame = () => {
      for (let i = 0; i < fieldElements.length; i++) {
        fieldElements[i].textContent = gameBoard.getField(i);
      }
    };
  
  
    const checkWinner = (fieldIndex) => {
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
        return winningConditions
        .filter((combination) => combination.includes(fieldIndex))
        .some((possibleCombination) =>
          possibleCombination.every(
            (index) => gameBoard.getField(index) === getCurrentPlayerSign()
          )
          );
  }
  return {turns, checkWinner, resetGame, updateGame}
  })()

