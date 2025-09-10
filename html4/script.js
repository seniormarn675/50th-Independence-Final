document.addEventListener('DOMContentLoaded', () => {
    const flag = document.getElementById('flag');

    function moveFlag() {
        const randomX = (Math.random() - 0.5) * 10; // -5 to 5
        const randomY = (Math.random() - 0.5) * 10; // -5 to 5
        
        flag.style.transition = 'transform 2s ease-in-out';
        flag.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    // Move the flag every 2 seconds
    setInterval(moveFlag, 2000);

    // Target date: September 16, 2025, 00:00 AM +10 (Port Moresby time zone)
    const targetDate = new Date("2025-09-16T00:00:00+10:00").getTime();
    const countdownElement = document.querySelector(".countdown");
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = `<p class="text-center text-3xl font-bold gold-text">
                Happy 50th Independence Day!
            </p>`;
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to avoid 1-second delay
});
