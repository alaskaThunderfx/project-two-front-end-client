const store = require('../store.js')
const gamescripts = require('../gamescripts.js')
const livingRoomInspect = require('../roomObjects/livingRoom/inspect.js')
const livingRoomOpen = require('../roomObjects/livingRoom/open.js')
const livingRoomPickUp = require('../roomObjects/livingRoom/pick-up.js')
const livingRoomUse = require('../roomObjects/livingRoom/use.js')

const newGameSuccess = function (res) {
  store.game = res.game
  $('.game-cabinet').css('display', 'none')
  $('#sign-out').css('display', 'flex')
  $('#sign-out').css('position', 'fixed')
  $('#sign-out').css('top', '0px')
  $('#sign-out').css('right', '0px')
  $('#messaging').html('')
  $('#messaging').html('New game created!')
  $('#messaging').css('grid-area', '2 / 2 / auto / auto')
  $('#messaging').css('position', 'relative')
  $('#messaging').css('top', '-180%')
  $('.for-screen-hiding').removeClass('hidden')
  $('#change-password').css('display', 'none')
  $('h1').css('grid-row', '1')
  $('h1').css('display', 'flex')
  $('h1').css('align-item', 'top')
  $('h1').css('display', 'flex')
  $('h1').css('position', 'relative')
  $('h1').css('top', '-100%')
  $('.game-actions').addClass('hidden')
  $('.user-actions').css('display', 'flex')
  $('.user-actions').css('position', 'absolute')
  $('.user-actions').css('right', '50%')
  $('.user-actions').css('left', '50%')
  $('.user-actions').css('bottom', '0px')
  $('.game-text').html(gamescripts.intro)
  setTimeout(function () {
    $('#messaging').html('Directions:<br>Throughout the story you will see underlined words.<br>These are <u>keywords</u> that you can perform actions on.<br>Enter a <u>keyword</u> in the space below and click an action you\'d like to perform on it!')
  }, 2000)
}

const newGameFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('.... :\'(   You\'ve failed to create a new game')
}

const indexGamesSuccess = function (res) {
  let gamesHtml = ''

  res.games.forEach(game => {
    const inventory = []
    game.inventory.forEach(item => inventory.push(' ' + item))
    gamesHtml += `
    <h5>Game ID:</h5>
    <p>${game._id}</p>
    <h5>Game started:</h5>
    <p>${game.createdAt}
    <h5>Items collected:</h5>
    `
    if (game.inventory.length === 0) {
      gamesHtml +=
      `
      <p>None</p>
      <p>----------------</p>
      <br>
      <br>
      `
    } else {
      gamesHtml +=
      `
      <p>${inventory}</p>
      <p>----------------</p>
      <br>
      <br>
      `
    }
  })

  $('.game-cabinet').html(gamesHtml)
}

const indexGamesFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('Index failed... What you can\'t even list a few games?? Get oudda herrreee...')
}

const showGameSuccess = function (res) {
  let gamesHtml = ''
  const inventory = []
  res.game.inventory.forEach(item => inventory.push(' ' + item))
  gamesHtml += `
  <h5>Game ID:</h5>
  <p>${res.game._id}</p>
  <h5>Game started:</h5>
  <p>${res.game.createdAt}
  <h5>Items collected:</h5>
  `
  if (res.game.inventory.length === 0) {
    gamesHtml +=
    `
    <p>None</p>
    <p>----------------</p>
    <br>
    <br>
    `
  } else {
    gamesHtml +=
    `
    <p>${inventory}</p>
    <p>----------------</p>
    <br>
    <br>
    `
  }
  $('.game-cabinet').html(gamesHtml)
}

const showGameFailure = function (res) {
  $('#messaging').html('Can\'t show you any games... Sry...')

  $('.game-cabinet').html()
}

const deleteGameSuccess = function (res) {
  $('#delete-game').trigger('reset')
  $('#messaging').html('')
  $('#messaging').html('Game deleted!')
}

const deleteGameFailure = function () {
  console.error()
  $('#messaging').html('')
  $('#messaging').html('Much like cockroaches, this game isn\'t going anywhere!')
}

// Just trying to make this work for the first room=
const inspectSuccess = function (object) {
  // for livingRoom
  if (object === 'sofa') {
    $('.user-action-messages').html(livingRoomInspect.sofa)
  } else if (object === 'door' || object === 'doors') {
    $('.user-action-messages').html(livingRoomInspect.doors)
  } else if (object === 'first door') {
    $('.user-action-messages').html(livingRoomInspect.firstDoor)
  } else if (object === 'second door') {
    $('.user-action-messages').html(livingRoomInspect.secondDoor)
  } else if (object === 'third door') {
    $('.user-action-messages').html(livingRoomInspect.thirdDoor)
  } else if (object === 'table') {
    $('.user-action-messages').html(livingRoomInspect.table)
  } else if (object === 'drawer') {
    $('.user-action-messages').html(livingRoomInspect.drawer)
  } else if (object === 'paintings') {
    $('.user-action-messages').html(livingRoomInspect.paintings)
  } else if (object === 'pedestal') {
    $('.user-action-messages').html(livingRoomInspect.pedestal)
  }
  $('#action-buttons').trigger('reset')
}

const openSuccess = function (object) {
  $('.user-action-messages').html(livingRoomOpen.drawer)
  if (object === 'second door') {
  }
  $('#action-buttons').trigger('reset')
}

const openFailure = function (object) {
  if (object === 'second door') {
    $('.user-action-messages').html(livingRoomOpen.secondDoorLocked)
  }
  $('#action-buttons').trigger('reset')
}

const pickUpSuccess = function (res) {
  $('.user-action-messages').html(livingRoomPickUp.key)
  $('#action-buttons').trigger('reset')
}

const useSuccess = function (res) {
  $('.user-action-messages').html(livingRoomUse.keySecondDoor)
  $('#action-buttons').trigger('reset')
}

// const room1Success = function (res) {
//   $('#room2').removeClass('hidden')
//   $('#room4').removeClass('hidden')
//   $('#room1').addClass('hidden')
//   $('#room3').addClass('hidden')
//   $('#room5').addClass('hidden')
//   store.game.areas.push('room1')
//   console.log('Res: ', res)
//   console.log('Store: ', store)
//   $('.game-text').html(gamescripts.room1)
// }
//
// const room2Success = function (res) {
//   $('#room1').removeClass('hidden')
//   $('#room3').removeClass('hidden')
//   $('#room2').addClass('hidden')
//   $('#room4').addClass('hidden')
//   store.game.areas.push('room2')
//   $('.game-text').html(gamescripts.room2)
// }
//
// const room3Success = function (res) {
//   $('#room2').removeClass('hidden')
//   $('#room4').removeClass('hidden')
//   $('#room1').addClass('hidden')
//   $('#room3').addClass('hidden')
//   store.game.areas.push('room3')
//   $('.game-text').html(gamescripts.room3)
// }
//
// const room4Success = function (res) {
//   $('#room1').removeClass('hidden')
//   $('#room3').removeClass('hidden')
//   $('#room5').removeClass('hidden')
//   $('#room2').addClass('hidden')
//   $('#room4').addClass('hidden')
//   store.game.areas.push('room4')
//   $('.game-text').html(gamescripts.room4)
// }
//
// const room5Success = function (res) {
//   $('#room4').removeClass('hidden')
//   $('#room1').addClass('hidden')
//   $('#room3').addClass('hidden')
//   $('#room5').addClass('hidden')
//   store.game.areas.push('room5')
//   $('.game-text').html(gamescripts.room5)
// }
//
// const roomFailure = function () {
//   $('#messaging').html('')
//   $('#messaging').html('You\'re.... You\'re still in the same room...')
// }

module.exports = {
  newGameSuccess,
  newGameFailure,
  indexGamesSuccess,
  indexGamesFailure,
  deleteGameSuccess,
  deleteGameFailure,
  showGameSuccess,
  showGameFailure,
  inspectSuccess,
  openSuccess,
  openFailure,
  useSuccess,
  pickUpSuccess
  // room1Success,
  // room2Success,
  // room3Success,
  // room4Success,
  // room5Success,
  // roomFailure
}
