# Stopwatch

The stopwatch has a timer, which is meant to be controlled by the stopwatch's three buttons: a start button, a stop button, and a reset button. The stopwatch starts out in its idle state, with the timer at 00:00:00 and the start button as the only enabled button.

The stopwatch should have the following functionality:

1. When the start button is pressed from the idle state, the timer should start counting up from 00:00:00.
2. While the timer is counting up, the stop button should be enabled, and the start and reset button should be disabled.
3. When the timer is pressed, the timer should pause.
4. While the timer is paused, the stop button should be disabled, and the start and reset buttons hould be enabled.
5. When the start button is pressed from the paused state, the timer should resume counting up from its previous time.
6. When the reset button is pressed from the paused state, the entire stopwatch should go back to its original idle state.
7. The timer should be in the format minutes:seconds:milliseconds, with minutes and seconds having two digits and milliseconds having three digits. For example, if 2 minutes, 15 seconds, and 350 milliseconds have elapsed, the timer should read 02:15:350.
8. You don't need to handle times greater than 59:59:999.

   
