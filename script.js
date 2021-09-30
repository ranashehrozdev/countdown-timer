const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minutesEL = document.getElementById('minutes');
const secondsEL = document.getElementById('seconds');

const newYears = "1 jan 2022";

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60)


    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minutesEL.innerHTML = formatTime(minutes);
    secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
// initial call
countdown();

setInterval(countdown, 1000);

const outer = () => {
    let counter = 0;
    const incrementCounter = () => {
        counter++;
    }
    return incrementCounter
}
const newFunction = outer();
newFunction()
newFunction()
console.log(newFunction());
//