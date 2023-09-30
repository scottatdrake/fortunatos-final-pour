function updateCountdown() {
  const eventDate = new Date("October 28, 2023 19:30:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Get modal element
const modal = document.getElementById("rsvp-modal");
// Get close button
const closeBtn = document.getElementsByClassName("close")[0];
// Get RSVP link
const rsvpLink = document.getElementById("rsvp-link");

// Open the modal
rsvpLink.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "block";
});

// Close the modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal if outside click
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
