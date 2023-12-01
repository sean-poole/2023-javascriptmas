// Task: 
// - Get today's date (you only need the day).
// - Calculate remaining days.
// - Display remaining days in countdownDisplay.

// Stretch Goals: 
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.

const countdownDays = document.getElementById("countdown-days");
const countdownHours = document.getElementById("countdown-hours");
const countdownMinutes = document.getElementById("countdown-minutes");
const countdownSeconds = document.getElementById("countdown-seconds");

function renderCountdown() {
  const christmas = new Date("2023-12-25 00:00:00").getTime()
  const today = new Date().getTime();
  const difference = christmas - today;

  if (difference <= 0) {
    clearInterval(interval);
    document.querySelector("h1").innerHTML = "MERRY CHRISTMAS!";
  }
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdownDays.innerHTML = days;
  countdownHours.innerHTML = hours;
  countdownMinutes.innerHTML = minutes;
  countdownSeconds.innerHTML = seconds;
}

const interval = setInterval(renderCountdown, 1000);
renderCountdown();
