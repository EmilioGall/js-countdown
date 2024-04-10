/**
 * Description: function prints seconds on page.
 * @param {number} seconds
 */
function printSeconds(seconds) {
    // operatore ternario
    let sStr = seconds <= 9 ? "0" + seconds.toString() : seconds.toString();
  
    display.innerText = sStr;
  }