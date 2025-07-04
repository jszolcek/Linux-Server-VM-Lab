document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlay-img");
  const overlayCaption = document.getElementById("overlay-caption");
  const images = document.querySelectorAll(".image-row img");
  const carousel = document.getElementById("carousel");
  const title = document.querySelector("h1");

  let index = 0;
  let carouselInterval = setInterval(() => {
    index = (index + 1) % 5;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }, 2000); // adjust timing as needed

  function pauseCarousel() {
    clearInterval(carouselInterval);
  }

  function resumeCarousel() {
    carouselInterval = setInterval(() => {
      index = (index + 1) % 5;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 2000);
  }

  function hideCurrentCaption() {
    const captions = document.querySelectorAll(".pyramid-slide p");
    captions.forEach((cap, i) => {
      if (i === index) {
        cap.classList.add("caption-hidden");
      } else {
        cap.classList.remove("caption-hidden");
      }
    });
  }

  images.forEach((img) => {
    img.addEventListener("click", () => {
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;

      overlayImg.src = img.src;

      // Find and show caption text for the clicked image's slide
      const slide = img.closest(".pyramid-slide");
      overlayCaption.textContent = slide.querySelector("p").textContent;

      let newWidth = naturalWidth * 5;
      let newHeight = naturalHeight * 5;

      const maxWidth = window.innerWidth * 0.9;
      const maxHeight = window.innerHeight * 0.9;

      if (newWidth > maxWidth) {
        const scale = maxWidth / newWidth;
        newWidth = maxWidth;
        newHeight = newHeight * scale;
      }

      if (newHeight > maxHeight) {
        const scale = maxHeight / newHeight;
        newHeight = maxHeight;
        newWidth = newWidth * scale;
      }

      overlayImg.style.width = `${newWidth}px`;
      overlayImg.style.height = `${newHeight}px`;

      overlay.style.display = "flex";
      pauseCarousel();

      hideCurrentCaption(); // Hide caption on main page

      title.style.display = "none"; // Hide title on overlay open
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlayImg.src = "";
    overlayImg.style.width = "";
    overlayImg.style.height = "";
    overlayCaption.textContent = "";

    resumeCarousel();

    // Show all captions again
    const captions = document.querySelectorAll(".pyramid-slide p");
    captions.forEach((cap) => cap.classList.remove("caption-hidden"));

    title.style.display = ""; // Show title on overlay close
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.style.display === "flex") {
      overlay.style.display = "none";
      overlayImg.src = "";
      overlayImg.style.width = "";
      overlayImg.style.height = "";
      overlayCaption.textContent = "";

      resumeCarousel();

      const captions = document.querySelectorAll(".pyramid-slide p");
      captions.forEach((cap) => cap.classList.remove("caption-hidden"));

      title.style.display = ""; // Show title on overlay close
    }
  });
});
