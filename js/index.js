import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay,
} from "./elements.js"

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,

})

const sound = Sound({
    
})


buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.buttonPressAudio()
})

buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.buttonPressAudio()

})

buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
})

buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')

})

buttonSoundOff.addEventListener('click', function () {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

buttonSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})