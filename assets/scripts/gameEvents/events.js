const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const roomObjects = require('../roomObjects/roomObjects.js')
const livingRoomItems = require('../roomObjects/livingRoom/items.js')
const store = require('../store.js')

const onNewGame = function (event) {
  event.preventDefault()
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
  api.indexGames()
    .then(ui.indexGamesSuccess)
    .catch(ui.indexGamesFailure)
}

const onDeleteGame = function (event) {
  event.preventDefault()
  const form = event.target
  const gameId = getFormFields(form)
  api.deleteGame(gameId)
    .then(ui.deleteGameSuccess)
    .catch(ui.deleteGameFailure)
}

const onShowGame = function (event) {
  event.preventDefault()
  const form = event.target
  const gameId = getFormFields(form)
  api.showGame(gameId)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onAction = function (event, btnId) {
  event.preventDefault()
  const form = event.target
  const object = getFormFields(form)
  if (store.game.currentArea === 'livingRoom') {
    if (btnId === 'inspect') {
      if (livingRoomItems.items.includes(object.object.toLowerCase().toLowerCase())) {
        ui.inspectSuccess(object.object.toLowerCase())
      } else {
        $('.user-action-messages').html('This either not here, or this action cannot be performed on this object.')
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
        } else {
          $('.user-action-messages').html('This is either not here, or this action cannot be performed on this object.')
          $('#action-buttons').trigger('reset')
        }
      }
    } else if (btnId === 'pick-up') {
      if (livingRoomItems.items.includes(object.object.toLowerCase())) {
        if (object.object.toLowerCase() === 'key') {
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
        } else {
          $('.user-action-messages').html('This is either not here, or this action cannot be performed on this object.')
          $('#action-buttons').trigger('reset')
        }
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
      } else {
        $('.user-action-messages').html('This is either not here, or this action cannot be performed on this object.')
        $('#action-buttons').trigger('reset')
      }
    }
  }
}

// const populateKeyword = function () {
//   console.log('Pressed sofa')
// }

module.exports = {
  onNewGame,
  onIndexGames,
  onDeleteGame,
  onShowGame,
  onAction,
  populateKeyword
}
