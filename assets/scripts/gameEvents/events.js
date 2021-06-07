const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const roomObjects = require('../roomObjects/roomObjects.js')
const livingRoomItems = require('../roomObjects/livingRoom/items.js')
const store = require('../store.js')

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
  const form = event.target
  const object = getFormFields(form)
  if (store.game.currentArea === 'livingRoom') {
    if (livingRoomItems.items.includes(object.object)) {
      if (btnId === 'inspect') {
        ui.inspectSuccess(object.object)
      } else if (btnId === 'open') {
        // for the table drawer
        if (object.object === 'drawer') {
          if (store.game.rooms[0].livingRoom.table.isOpen === 'false') {
            const gameData = {
              game: {
                rooms: {
                  livingRoom: {
                    table: {
                      isOpen: true
                    }
                  }
                }
              }
            }
            store.game.rooms[0].livingRoom.table.isOpen = 'true'
            api.updateGame(gameData)
              .then(ui.openSuccess)
              .catch(ui.openFailure)
          }
        } else if (object.object === 'second door') {
          if (store.game.rooms[0].livingRoom.doors[0].diningRoom.isLocked === 'true') {
            ui.openFailure(object.object)
          } else {
            const gameData = {
              game: {
                $pull: {
                  inventory: 'key'
                },
                rooms: {
                  livingRoom: {
                    doors: {
                      diningRoom: {
                        isLocked: 'false'
                      }
                    }
                  }
                }
              }
            }
            store.object = object.object
            api.updateGame(gameData)
              .then(ui.openSuccess(object))
          }
        }
      } else if (btnId === 'pick-up') {
        if (object.object === 'key') {
          if (store.game.rooms[0].livingRoom.table.hasKey === 'true') {
            store.game.rooms[0].livingRoom.table.hasKey = 'false'
            store.game.inventory.push('key')
            const gameData = {
              game: {
                $push: {
                  inventory: 'key'
                },
                rooms: {
                  livingRoom: {
                    table: {
                      hasKey: false
                    }
                  }
                }
              }
            }
            api.updateGame(gameData)
              .then(ui.pickUpSuccess)
              .catch(ui.pickUpFailure)
          }
        } else if (object.object === 'second door') {

        }
      }
    } else {
      $('.user-action-messages').html(`There is either no ${object.object} here, or this action cannot be performed on this object.`)
      $('#action-buttons').trigger('reset')
    }
  }
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
  onRoom1,
  onRoom2,
  onRoom3,
  onRoom4,
  onRoom5
}
