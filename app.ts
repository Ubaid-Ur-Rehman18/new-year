// Function to update the countdown every second
function updateCountdown() {
    const now = new Date().getTime();
    const newYearDate = new Date('January 1, 2025 00:00:00').getTime();
    
    // Calculate the difference
    const distance = newYearDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    const daysElem = document.getElementById("days") as HTMLElement;
    const hoursElem = document.getElementById("hours") as HTMLElement;
    const minutesElem = document.getElementById("minutes") as HTMLElement;
    const secondsElem = document.getElementById("seconds") as HTMLElement;

    daysElem.innerHTML = `${days}`;
    hoursElem.innerHTML = `${hours}`;
    minutesElem.innerHTML = `${minutes}`;
    secondsElem.innerHTML = `${seconds}`;

    // If the countdown is finished, display a message
    if (distance < 0) {
        document.getElementById("countdown")!.innerHTML = "Happy New Year 2025!";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Call once immediately to avoid delay on page load
updateCountdown();
