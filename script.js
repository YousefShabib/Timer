const progress = document.getElementById("progress");
const elapsedLabel = document.getElementById("elapsed");
const durationLabel = document.getElementById("duration");

const slider = document.getElementById("slider");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let elapsed = 0;
let duration = 10;
let running = false;


slider.addEventListener("input", () => {
  duration = Number(slider.value);
  durationLabel.textContent = duration;
  if (elapsed < duration && running) running = true;
  updateUI();
});

resetBtn.addEventListener("click", () => {
  elapsed = 0;
  running = false;
  startBtn.textContent = "Start";
  updateUI();
});

startBtn.addEventListener("click", () => {
  if (!running) {
    if (elapsed >= duration) elapsed = 0;
    running = true;
    startBtn.innerHTML ="Stop";
  } 
  else {
    running = false;
    startBtn.innerHTML ="Start";
  }
});
function updateUI() {
  elapsedLabel.textContent = elapsed.toFixed(1);
  let percent = Math.min((elapsed / duration) * 100, 100);
  progress.style.width = percent + "%";
}

setInterval(() => {
  if (running) {
    elapsed += 0.1;
    if (elapsed >= duration) {
      elapsed = duration;
      running = false;
      startBtn.innerHTML ="Start";

    }
    updateUI();
  }
}, 100);


