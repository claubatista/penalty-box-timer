const playTimer = document.querySelectorAll('.btn__start');
const timer = document.querySelectorAll('.timer', '.both__timer');

let stopwatch = [playTimer.length]
let timers = [0, 0, 0, 0, 0, 0, 0, 0]

for (let i = 0; i < playTimer.length; i++)
playTimer[i].addEventListener('click', function() {
    playTimer[i].classList.toggle('btn__stop')
    playTimer[i].classList.toggle('btn__start')


if (playTimer[i].classList.contains('btn__stop')){
        this.innerHTML = 'STOP'

        stopwatch[i] = setInterval(function () {
            timers[i]++;

            timer[i].innerHTML = Math.floor(timers[i] / 60) + ':' + (timers[i]%60 <= 9 ? '0' + timers[i]%60 : timers[i]%60);
        }, 1000)
    }
    else {
       this.innerHTML = 'START'
       clearInterval(stopwatch[i]) 
    }
})
 






  
 
