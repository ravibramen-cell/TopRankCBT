let time = 60 * 60; // 60 Minutes

const timer = document.getElementById("timer");

function startTimer() {

    let minutes = Math.floor(time / 60);

    let seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerHTML = minutes + ":" + seconds;

    if (time > 0) {

        time--;

    } else {

        clearInterval(countdown);

        alert("Time Over");

    }

}

startTimer();

const countdown = setInterval(startTimer,1000);
