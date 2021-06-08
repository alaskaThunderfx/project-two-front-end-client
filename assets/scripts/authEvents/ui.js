const store = require('../store.js')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#messaging').html('')
  $('#messaging').html('You\'ve signed up!')
  $('#sign-up').css('display', 'none')
  $('#sign-in').css('display', 'flex')
  setTimeout(function () {
    $('#messaging').html('')
  }, 2000)
}

const signUpFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('Sign up failed...')
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  $('#messaging').html('')
  $('#messaging').html('You\'ve signed in!')
  $('#sign-in').css('display', 'none')
  $('#returning-user').addClass('hidden')
  $('#new-user').addClass('hidden')
  $('.logged-in-forms').removeClass('hidden')
  $('.game-actions').removeClass('hidden')
  $('.logged-in-forms').css('display: flex;')
  $('.logged-in-forms').css('flex-direction: column;')
  $('.logged-in-forms').css('justify-content: center;')
  setTimeout(function () {
    $('#messaging').html('')
  }, 2000)
  // store users data
  store.user = res.user
}

const signInFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('That\'s not how you sign in! Sign in failed!')
}

const signOutSuccess = function () {
  $('#messaging').html('')
  $('#messaging').html('You\'ve signed out! Ta ta!')

  // remove users data
  store.user = null
  console.log('in signOutSuccess')
}

const signOutFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('Sign out failed... How you even do that???')
}

const changePasswordSuccess = function (res) {
  $('#change-password').trigger('reset')
  $('#messaging').html('')
  $('#messaging').html('You\'ve changed that there password!')

  console.log('in changePasswordSuccess')
  console.log('res = ', res)
}

const changePasswordFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('You\'ve failed changed that password... Is there anyhting you do, ya know, successfully?')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
