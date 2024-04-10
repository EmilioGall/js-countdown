/**
 * Description: function prints stopwatch.
 * @param {number} h
 * @param {number} m
 * @param {number} s
 * @param {number} c
 */
function printStopwatch(h, m, s, c) {

    let hStr = h <= 9 ? "0" + h.toString() : h.toString();
    let mStr = m <= 9 ? "0" + m.toString() : m.toString();
    let sStr = s <= 9 ? "0" + s.toString() : s.toString();
    let cStr = c <= 9 ? "0" + c.toString() : c.toString();

    hoursDivElem.innerText = hStr;
    minutesDivElem.innerText = mStr;
    secondsDivElem.innerText = sStr;
    centsDivElem.innerText = cStr;

};


/**
 * Description: function calculate and print stopwatch.
 * @returns {any}
 */
function calcStopwatch() {

    if (cents < 99) {
    
        cents++;

    } else if (seconds < 59) {

        cents = 0;
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

};

