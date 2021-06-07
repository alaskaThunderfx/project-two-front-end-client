const inspect = function (object) {
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
}

module.exports = {
  inspect
}
