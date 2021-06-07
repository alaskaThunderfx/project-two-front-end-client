const store = require('../store.js')
const gamescripts = require('../gamescripts.js')

// const livingRoomItems = ['sofa', 'doors', 'table', 'drawer', 'paintings', 'pedestal', 'first door', 'second door', 'third door']

const newGameSuccess = function (res) {
  store.game = res.game
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('#messaging').html('')
  $('#messaging').html('New game created!')
  $('#room2').removeClass('hidden')
  $('#room4').removeClass('hidden')
  $('.game-text').html(gamescripts.intro)
}

const newGameFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('.... :\'(   You\'ve failed to create a new game')
}

const indexGamesSuccess = function (res) {
  console.log(res)
  let gamesHtml = ''

  res.games.forEach(game => {
    const gameAreas = []
    game.areas.forEach(area => gameAreas.push(' ' + area))
    gamesHtml += `
    <h5>Game ID:</h5>
    <p>${game._id}</p>
    <h5>Game started:</h5>
    <p>${game.createdAt}
    <h5>Areas traveled:</h5>
    `
    if (game.areas.length === 0) {
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
      <p>${gameAreas}</p>
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

const deleteGameSuccess = function (res) {
  console.log(res)
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
  // if (!livingRoomItems.includes(object)) {
  //   $('.user-action-messages').html('This either does not exist or is unremarkable...')
  console.log(object)
  // if (livingRoomItems.includes(object)) {
  if (object === 'sofa') {
    $('.user-action-messages').html('I\'m not sure if you\'re lookin\' at the sofa, or the sofa\'s lookin\' at you...')
  } else if (object === 'door' || object === 'doors') {
    $('.user-action-messages').html('Well, there are three doors here... The \'first door\' has the number 1 above it, the \'second door\' has the number 3 above it, and the \'third door\' has no number.')
  } else if (object === 'first door' || object === 'second door') {
    $('.user-action-messages').html('This door appears to be pretty normal.')
  } else if (object === 'third door') {
    $('.user-action-messages').html('This door appears to be missing a doorknob... Damn...')
  } else if (object === 'table') {
    $('.user-action-messages').html('This is a nice console table! It doesn\'t have much on top, however, there appears to be a \'drawer\' in it.')
  } else if (object === 'drawer') {
    $('.user-action-messages').html('Just a normal looking drawer... Doesn\'t appear to be locked.')
  } else if (object === 'paintings') {
    $('.user-action-messages').html('There are three framed paintings on the wall. The first one is of a cute and fluffy white dog, the second one is of a cute and fluffy white and grey guinea pig, the third is of a cute and fluffy black cat. There are name plates beneath each picture reading "Holly", "Doris", and "Leslie", respectively.')
  } else if (object === 'pedestal') {
    $('.user-action-messages').html('This pedestal has nothing on it... The top of it is dusty, but there is a square shape in the middle of it that has no dust... Maybe something was recently moved from here?')
  }
  $('#action-buttons').trigger('reset')
// } else {
//   $('.user-action-messages').html('This either does not exist or is unremarkable...')
}

const inspectFailure = function (object) {
  console.log('in inspectFailure')
  const littleTest = object
  $('.user-action-messages').html(`There is either no ${littleTest} here, or ${littleTest} is unremarkable...`)
  $('#action-buttons').trigger('reset')
}

const open = function () {
  const object = store.object
  if (object === 'key') {
    $('.user-action-messages').html('This pedestal has nothing on it... The top of it is dusty, but there is a square shape in the middle of it that has no dust... Maybe something was recently moved from here?')
  }
}

const pickUp = function (res) {
  let object = store.object
  console.log('You\'re in pickUp AND the object is: ', object)
}

const room1Success = function (res) {
  $('#room2').removeClass('hidden')
  $('#room4').removeClass('hidden')
  $('#room1').addClass('hidden')
  $('#room3').addClass('hidden')
  $('#room5').addClass('hidden')
  store.game.areas.push('room1')
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('.game-text').html(gamescripts.room1)
}

const room2Success = function (res) {
  $('#room1').removeClass('hidden')
  $('#room3').removeClass('hidden')
  $('#room2').addClass('hidden')
  $('#room4').addClass('hidden')
  store.game.areas.push('room2')
  $('.game-text').html(gamescripts.room2)
  console.log('Res: ', res)
  console.log('Store: ', store)
}

const room3Success = function (res) {
  $('#room2').removeClass('hidden')
  $('#room4').removeClass('hidden')
  $('#room1').addClass('hidden')
  $('#room3').addClass('hidden')
  store.game.areas.push('room3')
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('.game-text').html(gamescripts.room3)
}

const room4Success = function (res) {
  $('#room1').removeClass('hidden')
  $('#room3').removeClass('hidden')
  $('#room5').removeClass('hidden')
  $('#room2').addClass('hidden')
  $('#room4').addClass('hidden')
  store.game.areas.push('room4')
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('.game-text').html(gamescripts.room4)
}

const room5Success = function (res) {
  $('#room4').removeClass('hidden')
  $('#room1').addClass('hidden')
  $('#room3').addClass('hidden')
  $('#room5').addClass('hidden')
  store.game.areas.push('room5')
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('.game-text').html(gamescripts.room5)
}

const roomFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('You\'re.... You\'re still in the same room...')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  indexGamesSuccess,
  indexGamesFailure,
  deleteGameSuccess,
  deleteGameFailure,
  inspectSuccess,
  inspectFailure,
  open,
  pickUp,
  room1Success,
  room2Success,
  room3Success,
  room4Success,
  room5Success,
  roomFailure
}
