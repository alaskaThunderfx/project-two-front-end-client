const store = require('../store.js')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  $('#messaging').html('')
  $('#messaging').html('You\'ve signed up!')
  $('#sign-up').css('display', 'none')
  $('#sign-in').css('display', 'flex')
//   setTimeout(function () {
//     $('#messaging').html('')
//   }, 2000)
}

const signUpFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('Sign up failed...')
}

const signInSuccess = function (res) {
  $('#change-password').css('display', 'flex')
  $('#sign-in').trigger('reset')
  $('#messaging').html('')
  $('#messaging').html('You\'ve signed in!')
  $('#messaging').css('grid-row', '2')
  $('#messaging').css('grid-column', '2')
  $('#messaging').css('top', '-80%')
  $('#sign-in').css('display', 'none')
  $('#returning-user').addClass('hidden')
  $('#new-user').addClass('hidden')
  $('.logged-in-forms').removeClass('hidden')
  $('.game-actions').removeClass('hidden')
  $('.game-actions').removeClass('')
  $('.logged-in-forms').css('display', 'flex')
  $('.logged-in-forms').css('flex-direction', 'column')
  $('.logged-in-forms').css('justify-content', 'center')
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
  $('#messaging').html('You\'ve signed out! Ta ta!')
  $('#messaging').css('top', '-80%')
  $('.for-screen-hiding').addClass('hidden')
  $('.logged-in-forms').addClass('hidden')
  $('.game-actions').addClass('hidden')
  $('.user-actions').css('display', 'none')
  $('#sign-up').css('display', 'flex')
  $('#sign-out').css('display', 'none')
  $('#returning-user').removeClass('hidden')
  $('.game-text').html('')
  $('h1').css('grid-row', '')
  $('h1').css('display', '')
  $('h1').css('align-item', '')
  $('h1').css('display', '')
  $('h1').css('position', '')
  $('h1').css('top', '')
  setTimeout(function () {
  $('#messaging').html('')
  }, 2000)

  // remove users data
  store.user = null
}

const signOutFailure = function () {
  $('#messaging').html('')
  $('#messaging').html('Sign out failed... How you even do that???')
}

const changePasswordSuccess = function (res) {
  $('#change-password').trigger('reset')
  $('#messaging').html('')
  $('#messaging').html('You\'ve changed that there password!')
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
