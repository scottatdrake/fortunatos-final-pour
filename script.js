// Constants and utility functions
const ONE_DAY = 1000 * 60 * 60 * 24;
const ONE_HOUR = 1000 * 60 * 60;
const ONE_MINUTE = 1000 * 60;

const updateCountdown = () => {
  const eventDate = new Date("October 28, 2023 19:30:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;
  const days = Math.floor(distance / ONE_DAY);
  const hours = Math.floor((distance % ONE_DAY) / ONE_HOUR);
  const minutes = Math.floor((distance % ONE_HOUR) / ONE_MINUTE);
  const seconds = Math.floor((distance % ONE_MINUTE) / 1000);
  document.getElementById("timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").textContent = "EXPIRED";
  }
};

// Countdown timer
const countdownInterval = setInterval(updateCountdown, 1000);

// Modal functionality
const modal = document.getElementById("rsvp-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const rsvpLink = document.getElementById("rsvp-link");

rsvpLink.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Page load and scroll effects
document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector('.portrait-image');
  image.classList.add('visible');

  const signatureElement = document.querySelector('.signature');
  const checkSignatureVisibility = () => {
    const rect = signatureElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      signatureElement.classList.add('animate');
    }
  };

  window.addEventListener('scroll', checkSignatureVisibility);
  checkSignatureVisibility();
});

window.addEventListener('scroll', () => {
  const elementsToFade = document.querySelectorAll('.main > *');
  elementsToFade.forEach((element) => {
    const position = element.getBoundingClientRect();
    if (position.top <= window.innerHeight && position.bottom >= 0) {
      element.classList.add('visible');
    }
  });
});
