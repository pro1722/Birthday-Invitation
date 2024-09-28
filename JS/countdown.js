// Countdown Timer
const birthdayDate = new Date("January 17, 2025 00:00:00").getTime(); // Set your birthday date
const countdownE1 = document.getElementById("countdown");

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownE1.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownE1.innerHTML = "It's Party Time!";
    }
}, 1000);
