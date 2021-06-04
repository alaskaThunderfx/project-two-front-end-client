const store = require('../store.js')
const gamescripts = require('../../gamescripts.js')

const newGameSuccess = function (res) {
  console.log('This is what\'s in store: ', store)
  console.log('this is the res: ', res)
  store.game = res.game
  console.log('this is the updated res: ', res)
  console.log('this is the updated store: ', store)
  $('#messaging').html('')
  $('#messaging').html('New game created!')
  $('#room2').removeClass('hidden')
  $('#room4').removeClass('hidden')
  $('#game-text').html(gamescripts.room1)
}

const newGameFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('.... :\'(   You\'ve failed to create a new game')
}

const indexGamesSuccess = function (res) {
  console.log(res)
  let gamesHtml = ''
  let index = 0

  res.games.forEach(game => {
    gamesHtml += `
    <p>${index}</p>
    <p>${JSON.stringify(game)}</p>
    `
    index++
  })

  $('#game-cabinet').html(gamesHtml)
}

const indexGamesFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('Index failed... What you can\'t even list a few games?? Get oudda herrreee...')
}

const room1Success = function (res) {
  $('#room2').removeClass('hidden')
  $('#room4').removeClass('hidden')
  $('#room1').addClass('hidden')
  $('#room3').addClass('hidden')
  store.game.areas.push('room1')
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('#game-text').html(gamescripts.room1)
}

const room2Success = function (res) {
  $('#room1').removeClass('hidden')
  $('#room3').removeClass('hidden')
  $('#room2').addClass('hidden')
  $('#room4').addClass('hidden')
  store.game.areas.push('room2')
  $('#game-text').html(gamescripts.room2)
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
  $('#game-text').html(gamescripts.room3)
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
  $('#game-text').html(gamescripts.room4)
}

const room5Success = function (res) {
  $('#room4').removeClass('hidden')
  $('#room1').addClass('hidden')
  $('#room3').addClass('hidden')
  $('#room5').addClass('hidden')
  store.game.areas.push('room5')
  console.log('Res: ', res)
  console.log('Store: ', store)
  $('#game-text').html(gamescripts.room5)
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
  room1Success,
  room2Success,
  room3Success,
  room4Success,
  room5Success,
  roomFailure
}
