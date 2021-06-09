const config = require('../config.js')
const store = require('../store.js')

const newGame = function (gameData) {
  console.log('in newGame')
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
  console.log('in indexGames')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
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
    url: config.apiUrl + '/games/' + gameId.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showGame = function (gameId) {
  console.log('in showGame')
  console.log('gameId: ', gameId.id)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + gameId.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const move = function (moveData) {
  console.log('in move')
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

const action = function (object) {
  console.log('In action')
  console.log('The object is: ', object)
  store.object = object
  console.log('The stored object is: ', store.object)
}

module.exports = {
  newGame,
  indexGames,
  deleteGame,
  showGame,
  move,
  action,
  updateGame
}
