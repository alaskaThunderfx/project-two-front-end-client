'use strict'
const authEvents = require('./authEvents/events.js')
const gameEvents = require('./gameEvents/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // user account actions begin
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#new-here').on('click', authEvents.revealSignIn)
  $('#returning-here').on('click', authEvents.revealSignUp)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // user account actions ends

  // game actions begin
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#index-games').on('click', gameEvents.onIndexGames)
  $('#delete-game').on('submit', gameEvents.onDeleteGame)
  $('#show-game').on('submit', gameEvents.onShowGame)
  $('.actions').on('click', event => {
    event.preventDefault()
    const btnId = $(event.target).attr('id')
    $('#action-buttons').trigger('submit', btnId)
  })
  $('#action-buttons').on('submit', gameEvents.onAction)
  // game actions end

  // clicked word population
  $('#sofa').click(gameEvents.populateKeyword)
})
