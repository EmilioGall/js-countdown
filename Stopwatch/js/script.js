// Bonus per i più curiosi
// In una cartella a parte create il cronometro che mostra secondi e minuti.
// Inserite un bottone per avviare il cronometro, un'altro bottone per stoppare il cronometro e un'altro bottone ancora per resettare il cronometro.
// Dopo averlo implementato fatevi questa domanda:
// Che cosa succede se utente clicca sull'avvia più volte?

////////// BUTTONS ELEMENTS

// Define constant for Start Button Element.
const startButtonElem = document.getElementById("start");

console.log("startButtonElem", startButtonElem, typeof startButtonElem);

// Define constant for Pause Button Element.
const pauseButtonElem = document.getElementById("pause");

console.log("pauseButtonElem", pauseButtonElem, typeof pauseButtonElem);

// Define constant for Stop Button Element.
const stopButtonElem = document.getElementById("stop");

console.log("stopButtonElem", stopButtonElem, typeof stopButtonElem);

// Define constant for Reset Button Element.
const resetButtonElem = document.getElementById("reset");

console.log("resetButtonElem", resetButtonElem, typeof resetButtonElem);

////////// TIMER ELEMENTS

// Define constant for Hours Div Element.
const hoursDivElem = document.getElementById("hours");

console.log("hoursDivElem", hoursDivElem, typeof hoursDivElem);

// Define constant for Minutes Div Element.
const minutesDivElem = document.getElementById("minutes");

console.log("minutesDivElem", minutesDivElem, typeof minutesDivElem);

// Define constant for Seconds Div Element.
const secondsDivElem = document.getElementById("seconds");

console.log("secondsDivElem", secondsDivElem, typeof secondsDivElem);

// Define constant for Cents Div Element.
const centsDivElem = document.getElementById("cents");

console.log("centsDivElem", centsDivElem, typeof centsDivElem);

// Define constant for Partials Ol Element.
const partialsOlElem = document.getElementById("partials");

console.log("partialsOlElem", partialsOlElem, typeof partialsOlElem);

////////// TIMER

// Define variable for Hours.
let hours = 0;

// Define variable for Minutes.
let minutes = 0;

// Define variable for Seconds.
let seconds = 0;

// Define variable for Cents.
let cents = 0;

////////// TIMER

let stopwatch = "";

printStopwatch(hours, minutes, seconds, cents);

startButtonElem.addEventListener("click", function() {

    stopwatch = setInterval(calcStopwatch, 10);

    stopButtonElem.addEventListener("click", function() {

        clearInterval(stopwatch);

    });

});

pauseButtonElem.addEventListener("click", function() {

    printPartials(hours, minutes, seconds, cents);

    stopButtonElem.addEventListener("click", function() {

        clearInterval(stopwatch);

    });
    
});

resetButtonElem.addEventListener("click", function() {

    let hours = 0;

    let minutes = 0;

    let seconds = 0;

    let cents = 0;

    printStopwatch(hours, minutes, seconds, cents);

    partialsOlElem.innerHTML = "";

});




