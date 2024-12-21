// Function to update the countdown every second
function updateCountdown() {
    var now = new Date().getTime();
    var newYearDate = new Date('January 1, 2025 00:00:00').getTime();
    // Calculate the difference
    var distance = newYearDate - now;
    // Time calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result
    var daysElem = document.getElementById("days");
    var hoursElem = document.getElementById("hours");
    var minutesElem = document.getElementById("minutes");
    var secondsElem = document.getElementById("seconds");
    daysElem.innerHTML = "".concat(days);
    hoursElem.innerHTML = "".concat(hours);
    minutesElem.innerHTML = "".concat(minutes);
    secondsElem.innerHTML = "".concat(seconds);
    // If the countdown is finished, display a message
    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Happy New Year 2025!";
    }
}
// Update the countdown every second
setInterval(updateCountdown, 1000);
// Call once immediately to avoid delay on page load
updateCountdown();
