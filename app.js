const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__minute");
const timerSecEl = document.querySelector(".timer__second");

function getTimeDifference(start,end){

    let milliseconds = Math.floor(end - start);
    let seconds = Math.floor(milliseconds/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);
    return days + hours + minutes + seconds + milliseconds;
}

const startDate = new Date();
const endDate = new Date("April 26, 2018 07:30:00")

console.log(getTimeDifference(startDate, endDate));