const config = require('../config.js')
const store = require('../store.js')

const newGame = function (gameData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: gameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const indexGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteGame = function (gameId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/games/' + gameId.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showGame = function (gameId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + gameId.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const move = function (moveData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: moveData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateGame = function (gameData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    data: gameData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  newGame,
  indexGames,
  deleteGame,
  showGame,
  move,
  // action,
  updateGame
}
