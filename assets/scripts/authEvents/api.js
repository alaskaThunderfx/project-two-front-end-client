const config = require('../config.js')
const store = require('../store.js')

const signUp = function (userData) {
  console.log('in signUp')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: userData
  })
}

const signIn = function (userData) {
  console.log('in signIn')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: userData
  })
}

const signOut = function () {
  console.log('in signOut')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = function (userData) {
  console.log('in changePassword')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: userData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
