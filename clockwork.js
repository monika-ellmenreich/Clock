let countdownDate = new Date("April 3, 2021 8:00:00").getTime();

let countdownUpdate = setInterval(function() {
    let dateTimeNow = new Date().getTime();
    let howLong = countdownDate - dateTimeNow;

    let days = Math.floor(howLong / (1000 * 60 * 60 * 24));
    let hours = Math.floor((howLong % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((howLong % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((howLong % (1000 * 60)) / 1000);

    document.getElementById("CLOCK").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s "

    if (howLong < 0) {
        clearInterval(countdownUpdate);
        document.getElementById("CLOCK").innerHTML = "DONE";
    }
}, 1000)