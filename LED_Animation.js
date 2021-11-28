let strip: light.NeoPixelStrip = null
let pitch = 0
let roll = 0
input.onGesture(Gesture.ThreeG, function () {
    servos.A2.setRange(0, 90)
    servos.A1.run(50)
})
input.onGesture(Gesture.TwoG, function () {
    light.showRing(
    `blue blue blue blue blue blue blue blue blue blue`
    )
})
forever(function () {
    strip = light.createStrip(pins.A1, 30)
})
forever(function () {
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    if (pitch > 10) {
        strip.showAnimationFrame(light.rainbowAnimation)
        light.showRing(
        "red red red red red red red red red red"
        )
    } else if (pitch < -10) {
        strip.setAll(0x00ff00)
        strip.showAnimationFrame(light.colorWipeAnimation)
        light.showRing(
        `green green green green green green green green green green`
        )
    } else if (pitch <= 10 && pitch >= -10) {
        strip.setAll(0xffffff)
        strip.showAnimationFrame(light.sparkleAnimation)
        light.showRing(
        `white white white white white white white white white white`
        )
    } else {
    	
    }
})
