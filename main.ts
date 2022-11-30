let y = 0
input.onGesture(Gesture.Shake, function () {
    if (input.temperature() < 13) {
        basic.showIcon(IconNames.Surprised)
    }
    if (input.temperature() > 13) {
        music.playTone(784, music.beat(BeatFraction.Quarter))
    }
})
input.onButtonPressed(Button.AB, function () {
    y = 0
    for (let index = 0; index < 5; index++) {
        led.plot(1, y)
        led.plot(2, y)
        led.plot(3, y)
        y += 1
        basic.pause(200)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(2, 4 - y)
        led.plot(1, 4 - y)
        led.plot(3, 4 - y)
        basic.pause(200)
        y += 1
        if (y == 5) {
            y = 0
        }
    }
})
basic.forever(function () {
    led.setBrightness(275 - input.lightLevel())
})
