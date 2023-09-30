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


// Fade in on page load
document.addEventListener("DOMContentLoaded", function() {
  const image = document.querySelector('.portrait-image');
  image.classList.add('visible');
});

// Fade in on scroll
window.addEventListener('scroll', function() {
  const elementsToFade = document.querySelectorAll('.main > *'); // Selects all block-level children elements of .main

  elementsToFade.forEach(function(element) {
    const position = element.getBoundingClientRect();

    if (position.top <= window.innerHeight && position.bottom >= 0) {
      if (!element.classList.contains('visible')) {
        element.classList.add('visible');
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var signatureElement = document.querySelector('.signature');

  function checkSignatureVisibility() {
    var rect = signatureElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      signatureElement.classList.add('animate');
    }
  }

  window.addEventListener('scroll', checkSignatureVisibility);
  checkSignatureVisibility(); // for initial load
});
