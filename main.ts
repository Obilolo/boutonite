input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.EigthNote)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Sad)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("E B C5 A B G A F ", 140)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Skull)
})
basic.showString("Boutonite")
input.setSoundThreshold(SoundThreshold.Loud, 210)
