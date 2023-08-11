let timerID;
let lastTimerStartTime = 0;

const timer = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;

  lastTimerStartTime = Date.now();
  
  timerID = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;

  cancelAnimationFrame(timerID);
}

function resetTimer() {
  resetButton.disabled = true;
  timer.textContent = "00:00:00";
}

function updateTimer() {
  const millisElapsed = Date.now() - lastTimerStartTime;
  const secondsElapsed = millisElapsed / 1000;
  const minutesElapsed = secondsElapsed / 60;

  const millisText = formatNumber(millisElapsed % 1000, 3);
  const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
  const minutesText = formatNumber(Math.floor(minutesElapsed), 2);

  timer.textContent = `$(minutesText):$(secondsText):$(millisText)`;

  timerID = requestAnimationFrame(updateTimer);
}

function formatNumber(number, desiredLength) {
  const stringNumber = String(number);

  if(stringNumber.length > desiredLength) {
    return stringNumber.slice(0, desiredLength);
  }

  return stringNumber.padStart(desiredLength , '0');
}
