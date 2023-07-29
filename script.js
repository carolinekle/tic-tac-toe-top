const playerSign = () => {
    const playerX = "X"
    const playerO = "O"
    return{playerO, playerX}
  };
  

  const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    
    const getFields = () => {
      const fields = document.querySelectorAll("[data-field]")
      fields.addEventListener("click", setMarker,{
      once: true
      })
    }
    const setMarker = () => {
      fiends.innerText = "bye";
    }
  })

  const getName = () => {
    const playerXName = document.querySelector('[name="playerOne"]');
    const playerOName = document.querySelector('[name="playerTwo"]')
    return  {playerXName, playerOName}
  }


  const restartGame = () =>{
    const restart = document.querySelector(".restart")
    restart.addEventListener("click", () => {
      gameBoard;
  })
}



//✗
//ꙩ