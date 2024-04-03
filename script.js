let startTime, updatedTime, difference, interval;
let running = false;

function startStop() {
  if (!running) {
    startTimer();
    document.getElementById("startStop").innerText = "Stop";
    running = true;
  } else {
    stopTimer();
    document.getElementById("startStop").innerText = "Start";
    running = false;
  }
}

function lapReset() {
  if (running) {
    // Record lap time
    let lapTime = document.getElementById("display").innerText;
    let lapItem = document.createElement("li");
    lapItem.innerText = lapTime;
    document.getElementById("laps").appendChild(lapItem);
  } else {
    // Reset stopwatch
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
  }
}

function startTimer() {
  startTime = new Date().getTime();
  interval = setInterval(updateDisplay, 10);
}

function stopTimer() {
  clearInterval(interval);
}

function updateDisplay() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((difference % 1000) / 10);

  document.getElementById("display").innerText = 
    pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function pad(num) {
  return (num < 10 ? "0" : "") + num;
}
