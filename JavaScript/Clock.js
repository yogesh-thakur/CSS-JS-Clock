const digitalClock = document.querySelector(".digital-clock");

function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (seconds / 60) * 360 + 90;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDeg = (hours % 12 / 12) * 360 + (minutes / 60) * 30 + 90;

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minsHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    digitalClock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}

setInterval(setClock, 1000);
setClock();
