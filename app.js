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

    hours = hours - (days*24);
    minutes = minutes - (days*24*60) - (hours*60) ;
    seconds = seconds - (days*24*60*60) - (hours*60*60) - (minutes*60);
    return {
        rDays: days,
        rHours: hours,
        rMinutes: minutes,
        rSeconds: seconds
    }
}



let timer = setInterval(function (){
    const startDate = new Date();
    const endDate = new Date("March 14, 2020 21:25:34");

    let timeDifferenceObj =  getTimeDifference(startDate, endDate);

    if (timeDifferenceObj.rDays === 0 && timeDifferenceObj.rHours === 0 && timeDifferenceObj.rMinutes === 0 && timeDifferenceObj.rSeconds === 0  ){
        clearInterval(timer);
    }
    if (timeDifferenceObj.rDays < 10){
        timeDifferenceObj.rDays = "0" + timeDifferenceObj.rDays;
    }
    if (timeDifferenceObj.rHours < 10){
    timeDifferenceObj.rHours = "0" + timeDifferenceObj.rHours;
    }
    if (timeDifferenceObj.rMinutes < 10){
        timeDifferenceObj.rMinutes = "0" + timeDifferenceObj.rMinutes;
    }
    if (timeDifferenceObj.rSeconds < 10){
        timeDifferenceObj.rSeconds = "0" + timeDifferenceObj.rSeconds;
    }



    timerDayEl.textContent = timeDifferenceObj.rDays;
    timerHourEl.textContent = timeDifferenceObj.rHours;
    timerMinEl.textContent = timeDifferenceObj.rMinutes;
    timerSecEl.textContent = timeDifferenceObj.rSeconds;

}, 1000);