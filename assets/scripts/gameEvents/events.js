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

const onRoom1 = function (event) {
  event.preventDefault()
  const moveData = {
    game: {
      $push: {
        areas: 'room1'
      }
    }
  }
  console.log('in onRoom1')
  api.move(moveData)
    .then(ui.room1Success)
    .catch(ui.roomFailure)
}

const onRoom2 = function (event) {
  event.preventDefault()
  const moveData = {
    game: {
      $push: {
        areas: 'room2'
      }
    }
  }
  console.log('in onRoom2')
  api.move(moveData)
    .then(ui.room2Success)
    .catch(ui.roomFailure)
}

const onRoom3 = function (event) {
  event.preventDefault()
  const moveData = {
    game: {
      $push: {
        areas: 'room3'
      }
    }
  }
  console.log('in onRoom3')
  api.move(moveData)
    .then(ui.room3Success)
    .catch(ui.roomFailure)
}

const onRoom4 = function (event) {
  event.preventDefault()
  const moveData = {
    game: {
      $push: {
        areas: 'room4'
      }
    }
  }
  console.log('in onRoom4')
  api.move(moveData)
    .then(ui.room4Success)
    .catch(ui.roomFailure)
}

const onRoom5 = function (event) {
  event.preventDefault()
  const moveData = {
    game: {
      $push: {
        areas: 'room5'
      }
    }
  }
  console.log('in onRoom5')
  api.move(moveData)
    .then(ui.room5Success)
    .catch(ui.roomFailure)
}

module.exports = {
  onNewGame,
  onIndexGames,
  onRoom1,
  onRoom2,
  onRoom3,
  onRoom4,
  onRoom5
}
