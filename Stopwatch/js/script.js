// Bonus per i più curiosi
// In una cartella a parte create il cronometro che mostra secondi e minuti.
// Inserite un bottone per avviare il cronometro, un'altro bottone per stoppare il cronometro e un'altro bottone ancora per resettare il cronometro.
// Dopo averlo implementato fatevi questa domanda:
// Che cosa succede se utente clicca sull'avvia più volte?

let cents = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const centsElem = document.getElementById("cents")

printStopwatch(hours, minutes, seconds, cents);

const clock = setInterval(function () {

    if (seconds < 59) {

        seconds++;

    } else if (minutes < 59) {

        seconds = 0;
        minutes++;

    } else if (hours < 23) {

        seconds = 0;
        minutes = 0;
        hours++;

    } else {
        seconds = 0;
        minutes = 0;
        hours = 0;
    }

    printStopwatch(hours, minutes, seconds, cents);
}, 1000);

document.getElementById("stop").addEventListener("click", function() {
  clearInterval(clock);
})

/**
 * Description: funzione che stampa orario in pagina
 * @param {number} h
 * @param {number} m
 * @param {number} s
 */
function printTime(h, m, s) {
  // operatore ternario
  let sStr = s <= 9 ? "0" + s.toString() : s.toString();
  let hStr = h <= 9 ? "0" + h.toString() : h.toString();
  let mStr = m <= 9 ? "0" + m.toString() : m.toString();

  // if(s <= 9) {
  //   sStr = "0" + s.toString();
  // } else {
  //   sStr = s.toString();
  // }

  document.getElementById("second").innerText = sStr;
  document.getElementById("minute").innerText = mStr;
  document.getElementById("hour").innerText = hStr;
}
