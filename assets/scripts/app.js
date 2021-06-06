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
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // user account actions ends
  // game actions begin
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#index-games').on('click', gameEvents.onIndexGames)
  $('#delete-game').on('submit', gameEvents.onDeleteGame)
  $('#inspect').on('click', () => {
    $('#action-buttons').submit(gameEvents.onInspect)
  })
  $('#pick-up').on('click', () => {
    $('#action-buttons').submit(gameEvents.onPickUp)
  })
  $('#open').on('click', () => {
    $('#action-buttons').submit(gameEvents.onInspect)
  })
  $('#room1').on('click', gameEvents.onRoom1)
  $('#room2').on('click', gameEvents.onRoom2)
  $('#room3').on('click', gameEvents.onRoom3)
  $('#room4').on('click', gameEvents.onRoom4)
  $('#room5').on('click', gameEvents.onRoom5)
})
