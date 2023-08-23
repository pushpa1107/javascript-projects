document.addEventListener("click", function () {
    
    const targetDate = new Date("2023-12-31T23:59:59").getTime();
  
   
    const countdownInterval = setInterval(function () {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
      }
    }, 1000); // Update every second
  });