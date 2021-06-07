const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const roomObjects = require('../roomObjects/roomObjects.js')
const roomItems = require('../roomObjects/roomItems.js')
const store = require('../store.js')

const livingRoomItems = roomItems.livingRoomItems

const onNewGame = function (event) {
  event.preventDefault()
  console.log('in onNewGame')
  const gameData = {
    game: {
      currentArea: 'livingRoom',
      inventory: [''],
      rooms: [roomObjects.livingRoom, roomObjects.diningRoom, roomObjects.study, roomObjects.bedroom, roomObjects.lab]
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

const onDeleteGame = function (event) {
  event.preventDefault()
  console.log('in onDeleteGame')
  const form = event.target
  console.log(form)
  const gameId = getFormFields(form)
  console.log(gameId)
  api.deleteGame(gameId)
    .then(ui.deleteGameSuccess)
    .catch(ui.deleteGameFailure)
}

const onAction = function (event, btnId) {
  event.preventDefault()
  console.log('btnId = ', btnId)
  // console.log(store.game.inventory)
  console.log('You pressed Inspect')
  const form = event.target
  const object = getFormFields(form)
  console.log(object)
  if (store.game.currentArea === 'livingRoom') {
    if (livingRoomItems.includes(object.object)) {
      console.log(object.object)
      ui.inspectSuccess(object.object)
    } else {
      console.log(object.object)
      $('.user-action-messages').html(`There is either no ${object.object} here, or ${object.object} is unremarkable...`)
      $('#action-buttons').trigger('reset')
      $('#inspect').trigger('reset')
    }
  }
}

const onOpen = function (event) {
  event.preventDefault()
  console.log('You pressed Open')
  const form = event.target
  const object = getFormFields(form)
  api.open(object.object)
    .then(ui.openSuccess)
    .catch(ui.openFailure)
}

const onPickUp = function (event) {
  event.preventDefault()
  console.log('in onPickUp')
  const form = event.target
  const object = getFormFields(form)
  store.object = object.object
  ui.pickUp()
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
  onDeleteGame,
  onAction,
  onPickUp,
  onOpen,
  onRoom1,
  onRoom2,
  onRoom3,
  onRoom4,
  onRoom5
}
