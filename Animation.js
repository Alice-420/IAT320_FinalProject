let strip: light.NeoPixelStrip = null
input.buttonA.onEvent(ButtonEvent.Click, function () {
    strip.setGradient(0xff9da5, 0xff0080)
    strip.showAnimation(light.runningLightsAnimation, 2000)
    light.showRing(
    "red red red red red red red red red red"
    )
})
input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    strip.showAnimationFrame(light.rainbowAnimation)
    light.showRing(
    `blue blue blue blue blue blue blue blue blue blue`
    )
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    strip.setGradient(0xb09eff, 0x7f00ff)
    strip.showAnimation(light.colorWipeAnimation, 2000)
    light.showRing(
    `purple purple purple purple purple purple purple purple purple purple`
    )
})
input.onGesture(Gesture.Shake, function () {
    strip.setAll(0xffffff)
    strip.showAnimation(light.sparkleAnimation, 2000)
    light.showRing(
    `white white white white white white white white white white`
    )
})
forever(function () {
    strip = light.createStrip(pins.A1, 30)
})
