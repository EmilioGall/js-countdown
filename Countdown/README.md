# Simple Countdown

## Text of the exercise
Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
Iniziate stampando il countdown nella console e dopo stampatelo in pagina.

## Solution

#### FUNCTIONS

- [x] Define function that prints seconds on display div element. (printSeconds)

### DATA COLLECTION

- [x] Define constant for display div element. (display)

- [x] Define variable for start count number. (countdown)

### LOGICAL EXECUTION

- **SET INTERVAL** each *1000* (newYear)

    - [x] Invoke function(printSeconds)

    - **IF** (countdown > 0)

        -[x] Decreases (countdown) by 1

    - **ELSE IF** (countdown === 0)

        -[x] Clear interval function (newYear)

        -[x] Print "Happy New Year!" on display div element.
