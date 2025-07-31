const progress = document.getElementById("progress");
const elapsedLabel = document.getElementById("elapsed");
const durationLabel = document.getElementById("duration");

const slider = document.getElementById("slider");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let elapsed = 0;
let duration = 10;
let running = false;

let timerId = null;

slider.addEventListener("input", () => {
    duration = Number(slider.value);
    durationLabel.textContent = duration;
    updateUI();
  });
  
  resetBtn.addEventListener("click", () => {
    elapsed = 0;
    running = false;
    clearInterval(timerId);   // ⬅️ لو كان العداد شغال يوقف العداد بس تكبس reset
    startBtn.textContent = "Start";
    updateUI();
  });
  
  startBtn.addEventListener("click", () => {
    if (!running) {
      if (elapsed >= duration) elapsed = 0;
      running = true;
      startBtn.textContent = "Stop";
      timerId = setInterval(updateTimer, 100); // ⬅️   بس اكبس نشغل العداد
    } else {
      running = false;
      startBtn.textContent = "Start";
      clearInterval(timerId); // ⬅️ لما اكبس  Stop يوقف العداد فورًا.

    }
  });
  
  function updateTimer() {
    if (running) {
      elapsed += 0.1;
      if (elapsed >= duration) {
        elapsed = duration;
        running = false;
        startBtn.textContent = "Start";
        clearInterval(timerId); // ⬅️ بس يخلص الوقت العداد بوقف لحاله و ما بستدعيه
      }
      updateUI();
    }
  }
  
  function updateUI() {
    elapsedLabel.textContent = elapsed.toFixed(1);
    let percent = Math.min((elapsed / duration) * 100, 100);
    progress.style.width = percent + "%";
  }


  git add .
  git commit -m "timer loop new edit"
  git push origin timer_v1