document.addEventListener("DOMContentLoaded", function () {
  const carouselList = document.querySelector(".carousel-list");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const carouselItems = document.querySelectorAll(".carousel-item");

  let currentIndex = 0;
  const itemWidth = carouselItems[0].offsetWidth; // Width of each carousel item

  // Function to move the carousel to the next item
  function moveToNextItem() {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
      const translateX = -currentIndex * itemWidth;
      carouselList.style.transform = `translateX(${translateX}px)`;
    }
  }

  // Function to move the carousel to the previous item
  function moveToPrevItem() {
    if (currentIndex > 0) {
      currentIndex--;
      const translateX = -currentIndex * itemWidth;
      carouselList.style.transform = `translateX(${translateX}px)`;
    }
  }

  // Add click event listeners to prev and next buttons
  prevButton.addEventListener("click", moveToPrevItem);
  nextButton.addEventListener("click", moveToNextItem);
});
