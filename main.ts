/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: Sep 2024
 * This program is rock, paper, Scissors
*/

//cleaning
let score = 0
let randomNumber = -1
basic.clearScreen()
pause(1000)
basic.showIcon(IconNames.Happy)

//generating rock, paper or Scissors
input.onGesture(Gesture.Shake, function () {
randomNumber = randint(0, 2)

    if (randomNumber == 0) {
    basic.showIcon(IconNames.Square)
    pause(5000)
    basic.showIcon(IconNames.Happy)
    }
    
    if (randomNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
        pause(5000)
        basic.showIcon(IconNames.Happy)
    }

    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        pause(5000)
        basic.showIcon(IconNames.Happy)
    }

})

//adding to score
input.onButtonPressed(Button.A, function () {
    score = score + 1
    basic.showIcon(IconNames.Yes)
    pause(1000)
    basic.showIcon(IconNames.Happy)

})

//show score
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("score:")
    basic.showNumber(score)
    pause(1000)
    basic.showIcon(IconNames.Happy)
})


