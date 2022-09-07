
let time = 13;
/*--------------------------------*/
let timer = setInterval(countDownTimer, 1000);
/*--------------------------------*/
function countDownTimer() {

    if(time <= 10) document.documentElement.style.setProperty('--main-color', '#ff0000');

    if(time == 0) clearInterval(timer);
    /*--------------------------------*/
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time%3600)/60);
    let seconds = (time%3600)%60;
    /*--------------------------------*/
    seconds = seconds < 10 ? "0" + seconds : seconds
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0"+  hours : hours;
    /*--------------------------------*/
    document.querySelector(".hours").textContent = hours;
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".seconds").textContent = seconds;
    /*--------------------------------*/
    time--;
}
