// const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewGame = function (event) {
  event.preventDefault()
  console.log('in onNewGame')
  const gameData = {
    game: {
      areas: ['room1']
    }
  }
  api.newGame(gameData)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onIndexGames = function (event) {
  event.preventDefault()
  console.log('in onIndexGames')
  api.indexGames()
    .then(ui.indexGamesSuccess)
    .catch(ui.indexGamesFailure)
}

const onMove = function (event) {
  event.preventDefault()
  const moveData = {
    game: {
      $push: {
        areas: 'room2'
      }
    }
  }
  console.log('in onMove')
  api.move(moveData)
    .then(ui.moveSuccess)
    .catch(ui.moveFailure)
}

module.exports = {
  onNewGame,
  onIndexGames,
  onMove
}
