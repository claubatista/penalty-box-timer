const playTimer = document.querySelectorAll('.btn__start')
const timer = document.querySelectorAll('.timer')
const buttonReset = document.querySelectorAll('.btn__reset')


let stopwatch = [playTimer.length]
let timers = [0, 0, 0, 0, 0, 0, 0, 0]

for (let i = 0; i < playTimer.length; i++) {
    playTimer[i].addEventListener('click', function() {
        playTimer[i].classList.toggle('btn__stop')
        playTimer[i].classList.toggle('btn__start')

    if (playTimer[i].classList.contains('btn__stop')){
        this.innerHTML = 'STOP'

        stopwatch[i] = setInterval(function () {
            timers[i]++
            const time = Math.floor(timers[i] / 60) + ':' + (timers[i]%60 <= 9 ? '0' + timers[i]%60 : timers[i]%60)
            timer[i].innerHTML = time.padStart(5, '0')
        }, 1000)
    }else {
        this.innerHTML = 'START'
        clearInterval(stopwatch[i]) 
    }
    })

    buttonReset[i].addEventListener('click', function() {
        if (playTimer[i].classList.contains('btn__stop')){
            playTimer[i].innerHTML = 'START'
            playTimer[i].classList.toggle('btn__start')
            playTimer[i].classList.toggle('btn__stop')
            clearInterval(stopwatch[i])
        }
        timers[i] = 0
        timer[i].innerHTML = '00:00'
    })
}
   

 






  
 
