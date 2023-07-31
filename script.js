const player = (sign) => {
  this.sign = sign //where does sign exist?
    return{ sign}
  };

  const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    

      const setFields = (index, sign) => {
        if (index > board.length) return;
        board[index] = sign
    }

    const getFields = (index) => {
      return board[index]
    }

/*     const restartGame = () =>{
      const restart = document.querySelector(".restart")
      restart.addEventListener("click", () => {
        ;
    })
  } */
  
    return {setFields,getFields/* , restartGame */}
  })();


  const gameControlls = (() => {
    const playerX = player( "✗");
    const playerO = player("ꙩ");
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

    setMarker = () => {


    }
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
        return winConditions
        .filter((combination) => combination.includes(fieldIndex))
        .some((possibleCombination) =>
          possibleCombination.every(
            (index) => gameBoard.getField(index) === getCurrentPlayerSign()
          )
          );
  }
  })()


  const displays = (() => {
    const fields = document.querySelectorAll("[data-field]");
    fields.forEach((field, index) => {
      field.addEventListener("click", () => {
        gameControlls.turns()
      });
    });
    const setMarker= () => {

    }
    return 
  })();

/*   const getName = () => {
    const submitNames = document.querySelector(".submit-names");
    submitNames.addEventListener("click", () => {
      const playerXName = document.querySelector('[name="playerOne"]').value;
      const playerOName = document.querySelector('[name="playerTwo"]').value;
      player( playerXName, playerOName);
  

    });
  };
  player(playerXName, "c");
  player(playerOName, "ꙩ"); */