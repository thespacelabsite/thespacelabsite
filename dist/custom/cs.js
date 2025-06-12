document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    // document ready

    //   alert("hi");

    document.getElementById("overfull").style.display = "none";

    // Reinitialize carousels after page load with a small delay
    setTimeout(() => {
      const carousels = document.querySelectorAll(".carousel");
      carousels.forEach((carousel) => {
        if (window.bootstrap && window.bootstrap.Carousel) {
          const bsCarousel = new window.bootstrap.Carousel(carousel, {
            interval: 3000,
            ride: "carousel",
          });
        }
      });
    }, 100); // Small delay to ensure Bootstrap is ready
  }
};

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;
