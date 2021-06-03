const store = require('../store.js')

const newGameSuccess = function (res) {
  console.log('This is what\'s in store: ', store)
  console.log('this is the res: ', res)
  store.game = res.game
  console.log('this is the updated res: ', res)
  console.log('this is the updated store: ', store)
  $('#messaging').html('')
  $('#messaging').html('New game created!')
  $('#game-text').html(`OoOoOo you are in ${res.game.areas}`)
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

const moveSuccess = function (res) {
  console.log('This is what\'s in store: ', store)
  console.log('this is the res: ', res)
  store.game.areas.push('room2')
  console.log('this is the updated res: ', res)
  console.log('this is the updated store: ', store)
  $('#messaging').html('')
  $('#messaging').html('New game created!')
  $('#game-text').html(`OoOoOo NOW you are in ${store.game.areas[store.game.areas.length - 1]}`)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  indexGamesSuccess,
  indexGamesFailure,
  moveSuccess
}
