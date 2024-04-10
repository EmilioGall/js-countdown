/**
 * Description: function prints Stopwatch
 * @param {number} h
 * @param {number} m
 * @param {number} s
 * @param {number} c
 */
function printTime(h, m, s) {

    let cStr = c <= 9 ? "0" + s.toString() : s.toString();
    let sStr = s <= 9 ? "0" + s.toString() : s.toString();
    let mStr = m <= 9 ? "0" + m.toString() : m.toString();
    let hStr = h <= 9 ? "0" + h.toString() : h.toString();

    document.getElementById("cents").innerText = sStr;
    document.getElementById("seconds").innerText = sStr;
    document.getElementById("minutes").innerText = mStr;
    document.getElementById("hours").innerText = hStr;
    
  }