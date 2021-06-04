const config = require('../config.js')
const store = require('../store.js')

const newGame = function (gameData) {
  console.log('in newGame')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'games',
    data: gameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const indexGames = function () {
  console.log('in indexGames')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + 'games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteGame = function (gameId) {
  console.log('in deleteGame')
  console.log('gameId: ', gameId.id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'games/' + gameId.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const move = function (moveData) {
  console.log('in move')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'games/' + store.game._id,
    data: moveData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  indexGames,
  deleteGame,
  move
}
