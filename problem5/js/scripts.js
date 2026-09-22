function startCountdown() {
  const s = document.getElementById("status");
  s.textContent = "Counting down...";
  setTimeout(() => {
    s.textContent = "Go!";
  }, 3000);
}

function startTicker() {
  if (tickerId !== null) return; // prevents multiple intervals stacking
  const s = document.getElementById("status");
  let count = 0;
  tickerId = setInterval(() => {
    count++;
    s.textContent = "Ticks: " + count;
  }, 1000);
}

function stopTicker() {
  if (tickerId !== null) {
    clearInterval(tickerId);
    tickerId = null;
  }
}
