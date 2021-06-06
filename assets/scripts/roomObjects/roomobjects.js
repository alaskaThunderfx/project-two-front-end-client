// Room 4
const livingRoom = {
  livingRoom: {
    doors: [{
      // has a 3 above it
      diningRoom: {
        // requires key from table
        isLocked: true
      },
      // has a 1 above it
      bedroom: {
        // locked from the other side via a chair pushed up against the doorknob
        isLocked: true
      },
      // has no number above it
      lab: {
        // requires doorknob from bedroom
        isLocked: true
      }
    }],
    table: {
      // it isn't locked but it must be opened
      isOpen: false,
      // key required to open diningRoom
      hasKey: true
    },
    pedestal: {
      // requires statue from diningRoom
      hasStatue: false
    }
  }
}

// Room 3
const diningRoom = {
  diningRoom: {
    // there are 2 doors, but the door to the livingRoom stays unlocked, but it should be noted that it does exist, and has a 4 above it
    doors: {
      // has a 2 above it
      study: {
        // is unlocked by typing in the correct phrase on the relief on the door. it is a five word phrase "Actions speak louder than words." A user can try and guess beforehand, but the clue for this is in the china cabinet
        isLocked: true
      }
    },
    diningTable: {
      centerpiece: {
        // is unstuck by solving candleStand
        isStuck: true
      },
      candleStand: {
        // requires candle from grandfather clock in the study
        hasCandle: false
      }
    },
    chinaCabinet: {
      // it isn't locked, but it must be opened
      isOpen: false,
      // behind this special plate is the clue for the door to the study
      hasPlate: true
    }
  }
}

// Room 2
const study = {
  study: {
    // There{ are two doors in this room, but the one to the dining room remains open. It should be noted that it does exist and has a 3 above it
    doors: {
      // has a 1 above it
      bedroom: {
        // is unlocked by solving desk
        isLocked: true
      }
    },
    desk: {
      // this is the statue needed for pedestal
      hasStatue: true,
      drawer1: {
        // isn't locked but must be opened
        isOpen: false,
        // offers clue about drawer key in plant
        hasClue: true
      },
      drawer2: {
        // requires key from plant
        isLocked: true,
        // opens bedroom door
        switchIsPressed: false
      }
    },
    plant: {
      // user can find this before the clue
      hasKey: true
    },
    grandfatherClock: {
      // must be working to open the lower door with the candle in it
      // after hearing chimes, and clock is working, the hands on the face of the clock will point to the number as well
      isWorking: false,
      // this is the candle required for candleStand
      hasCandle: true
    }
  }
}

// Room 1
const bedroom = {
  bedroom: {
    // There are 2 doors in here, but the study door remains unlocked. It should be noted that this door does exist and has a 2 above it.
    doors: {
      // has the number 4 above it
      livingRoom: {
        // this is just intended to provide a short cut back to the starting room, it isn't locked by a key, but the user must choose to move the chair away from the doorknob
        isLocked: true
      }
    },
    // behind this is a code number
    bookcase: {
      // requires book from the lab
      hasBook: false
    },
    // will be able to check pillows and under blanket
    bed: {
      // under blanket
      hasDoorknob: true
    },
    // activates grandfatherClock
    desk: {
      // when all displays are true, puzzle solved, clue provided from pictures in livingRoom
      display1: {
        hasHolly: false
      },
      display2: {
        hasDoris: false
      },
      display3: {
        hasLeslie: false
      }
    }
  }
}

// Room 5
const lab = {
  lab: {
    // It should be noted that there are two doors in here, but the one to the livingRoom will be unlocked, and the other is opened when the code is solved, ending the game. There is a 4 above the livingRoom door

    // Solving the keypad is how you win, each code number obtained from the rooms
    keypad: {
      // requires codes from Room 1, Room 2, Room 3, and Room 4 respectively. When a correct number is entered in a spot, it will stay displayed
      firstNum: false,
      secondNum: false,
      thirdNum: false,
      fourthNum: false
    },
    // there are four monitors on the workstation, one for each room, inspecting each monitor will describe the state of the room as has been explored by the user
    workStation: {
      // Giovanni's Room for bookcase
      hasBook: true
    }
  }
}

module.exports = {
  livingRoom,
  diningRoom,
  study,
  bedroom,
  lab
}
