const player = () => {

    return{playerName, sign}
  };
  

  const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    
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
      const setMarker = () => {
        board[index] = sign
    }

    const getFields = () => {
      return[board]
    }
    return {setMarker,getFields}
  })();

  const displays = (() => {
    const fields = document.querySelectorAll("[data-field]")
    fields.addEventListener("click", handleClick, {once: true})
  })();

  const getName = () => {
    const submitNames = document.querySelector(".submit-names")
    submitNames.addEventListener("click", () => {
      const playerXName = document.querySelector('[name="playerOne"]').value;
      const playerOName = document.querySelector('[name="playerTwo"]').value;
      const playerX = player(playerXName, "✗")
      const playerO = player(playerOName, "ꙩ")
      return  {playerX, playerO}
    })
  }

  const restartGame = () =>{
    const restart = document.querySelector(".restart")
    restart.addEventListener("click", () => {
      gameBoard;
  })
}
