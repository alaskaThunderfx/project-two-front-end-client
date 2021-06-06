const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('in OnSignUp')
  const form = event.target
  const userData = getFormFields(form)
  console.log('UserData: ', userData)
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('in onSignIn')
  const form = event.target
  console.log('This is from the form: ', form)
  const userData = getFormFields(form)
  console.log('userData: ', userData)
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('in onSignOut')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('in onChangePassword')
  const form = event.target
  const userData = getFormFields(form)
  console.log('userData: ', userData)
  api.changePassword(userData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
