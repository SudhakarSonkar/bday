// Countdown Timer
const birthday = new Date('July 10, 2026 00:00:00').getTime(); // Set the target date and time

const countdown = setInterval(() => {
  const now = new Date().getTime(); // Get the current time
  const distance = birthday - now; // Calculate the time difference

  if (distance >= 0) {
    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the timer element
    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    // If the countdown is over, display a birthday message
    clearInterval(countdown);
    document.getElementById('timer').innerHTML = "Happy Birthday, Priyansha!";
  }
}, 1000); // Update every second`