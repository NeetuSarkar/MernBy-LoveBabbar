let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;
let timerInterval;

function updateDisplay() {
  const displayHours = hours < 10 ? `0${hours}` : hours;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  document.getElementById("hour").textContent = displayHours;
  document.getElementById("minute").textContent = displayMinutes;
  document.getElementById("second").textContent = displaySeconds;
}

function startStop() {
  if (isRunning) {
    clearInterval(timerInterval);
    document.getElementById("startStopBtn").textContent = "Start";
  } else {
    timerInterval = setInterval(updateTime, 1000);
    document.getElementById("startStopBtn").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timerInterval);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  document.getElementById("startStopBtn").textContent = "Start";
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

// Initial display update
updateDisplay();
