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

const onShowGame = function (event) {
  event.preventDefault()
  console.log('in onShowGame')
  const form = event.target
  console.log(form)
  const gameId = getFormFields(form)
  console.log(gameId)
  api.showGame(gameId)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onAction = function (event, btnId) {
  event.preventDefault()
  console.log('btnId = ', btnId)
  console.log(btnId === 'use')
  const form = event.target
  const object = getFormFields(form)
  if (store.game.currentArea === 'livingRoom') {
    console.log('current area = livingRoom')
    if (btnId === 'inspect') {
      if (livingRoomItems.items.includes(object.object.toLowerCase().toLowerCase())) {
        ui.inspectSuccess(object.object.toLowerCase())
      } else {
        $('.user-action-messages').html(`There is either no ${object.object.toLowerCase()} here, or this action cannot be performed on this object.`)
        $('#action-buttons').trigger('reset')
      }
    } else if (btnId === 'open') {
      if (livingRoomItems.items.includes(object.object.toLowerCase())) {
      // for the table drawer
        if (object.object.toLowerCase() === 'drawer') {
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
        } else if (object.object.toLowerCase() === 'second door') {
          if (store.game.rooms[0].livingRoom.doors[0].diningRoom.isLocked === 'true') {
            ui.openFailure(object.object.toLowerCase())
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
            store.object = object.object.toLowerCase()
            api.updateGame(gameData)
              .then(ui.openSuccess(object))
          }
        }
      } else {
        $('.user-action-messages').html(`There is either no ${object.object.toLowerCase()} here, or this action cannot be performed on this object.`)
        $('#action-buttons').trigger('reset')
      }
    } else if (btnId === 'pick-up') {
      if (livingRoomItems.items.includes(object.object.toLowerCase())) {
        if (object.object.toLowerCase() === 'key') {
          if (store.game.rooms[0].livingRoom.table.hasKey === 'true') {
            store.game.rooms[0].livingRoom.table.hasKey = 'false'
            store.game.inventory.push('key')
            console.log(store.game.inventory)
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
        }
      } else {
        $('.user-action-messages').html(`There is either no ${object.object.toLowerCase()} here, or this action cannot be performed on this object.`)
        $('#action-buttons').trigger('reset')
      }
    } else if (btnId === 'use') {
      if (object.object.toLowerCase() === 'key > second door') {
        if (store.game.inventory.includes('key')) {
          store.game.inventory.splice(store.game.inventory.indexOf('key'), 1)
          store.game.rooms[0].livingRoom.doors[0].diningRoom.isLocked = 'false'
          const gameData = {
            game: {
              $pull: {
                inventory: 'key'
              },
              rooms: {
                livingRoom: {
                  doors: {
                    diningRoom: {
                      isLocked: false
                    }
                  }
                }
              }
            }
          }
          api.updateGame(gameData)
            .then(ui.useSuccess)
            .catch(ui.useFailure)
        }
      }
      console.log('use store: ', store)
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
  onShowGame,
  onAction,
  onRoom1,
  onRoom2,
  onRoom3,
  onRoom4,
  onRoom5
}
