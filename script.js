let [milliseconds, seconds, minutes] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let lapCount = 0;

function updateDisplay() {
    milliseconds++;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    let ms = String(milliseconds).padStart(2, "0");
    display.innerHTML = `${m}:${s}:${ms}`;
}

function start() {
    if (interval) return;
    interval = setInterval(updateDisplay, 10);

    document.getElementById("startBtn").disabled = true;
    document.getElementById("pauseBtn").disabled = false;
    document.getElementById("lapBtn").disabled = false;
}

function pause() {
    clearInterval(interval);
    interval = null;

    document.getElementById("startBtn").disabled = false;
    document.getElementById("pauseBtn").disabled = true;
}

function reset() {
    clearInterval(interval);
    interval = null;
    [milliseconds, seconds, minutes] = [0, 0, 0];
    display.innerHTML = "00:00:00";

    document.getElementById("startBtn").disabled = false;
    document.getElementById("pauseBtn").disabled = true;
    document.getElementById("lapBtn").disabled = true;

    document.getElementById("laps").innerHTML = "";
    lapCount = 0;
}

function lap() {
    lapCount++;
    let lapTime = display.innerHTML;
    let lapDiv = document.createElement("div");
    lapDiv.className = "lap-item";
    lapDiv.innerText = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById("laps").appendChild(lapDiv);
}
function toggleTheme() {
    document.body.classList.toggle("light-theme");

    const btn = document.querySelector(".theme-toggle");
    if (document.body.classList.contains("light-theme")) {
        btn.innerHTML = "🌙";
    } else {
        btn.innerHTML = "☀️";
    }
}
