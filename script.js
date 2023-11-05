let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const item = document.querySelectorAll('.carousel-items');

function showSlide(index) {
  if (index < 0) {
    currentIndex = items.length - 1;
  } else if (index >= items.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = i === currentIndex ? 'block' : 'none';
  }
}

function previewSlide(index) {
    if (index < 0) {
      currentIndex = item.length - 1;
    } else if (index >= item.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
  
    for (let i = 0; i < item.length; i++) {
      item[i].style.display = i === currentIndex ? 'block' : 'none';
    }
  }

function prevSlide() {
  showSlide(currentIndex - 1);
    previewSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
    previewSlide(currentIndex + 1);
}

showSlide(currentIndex);
previewSlide(currentIndex);
