let countdown = 10;

const display = document.getElementById("display")

const newYear = setInterval(function () {

    printSeconds(countdown);

    console.log("countdown", countdown, typeof countdown);

    if (countdown > 0) {

        countdown--;

    } else if (countdown === 0) {

        clearInterval(newYear);

        display.innerText = "Happy New Year!!!";

    };
  
  }, 1000);