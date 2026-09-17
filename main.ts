input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 9))
    basic.pause(3000)
    basic.clearScreen()
})
basic.showString("shake")
basic.pause(100)
