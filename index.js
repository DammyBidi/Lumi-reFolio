const imageContainer = document.getElementById("imageContainer");
const images = imageContainer.querySelectorAll(".fade-image");
const firstImage = imageContainer.querySelector(".fade-image:first-child");

let currentIndex = 0;
let intervalId;

// Function to fade in the next image
function fadeNextImage() {
  const nextIndex = (currentIndex + 1) % images.length;

  images[currentIndex].classList.remove("active");
  images[nextIndex].classList.add("active");

  currentIndex = nextIndex;
}

// Start the fading animation on hover
imageContainer.addEventListener("mouseenter", function () {
  intervalId = setInterval(fadeNextImage, 500); // Adjust the timing for the desired speed
});

// Stop the fading animation when not hovering
imageContainer.addEventListener("mouseleave", function () {
  clearInterval(intervalId);
  images[currentIndex].classList.remove("active");
  firstImage.classList.add("active");
  currentIndex = 0;
});

// Show the first image on page load
firstImage.classList.add("active");



