const gameInfo = JSON.parse(localStorage.getItem("history"))[-1]

const gameId = document.querySelector('.gameId')
const gameTime = document.querySelector(".time")

gameId.innerHTML = gameInfo.id
gameTime.innerHTML = gameInfo.elapsedTime