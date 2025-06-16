document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    // document ready

    //   alert("hi");

    document.getElementById("overfull").style.display = "none";

    // Initialize carousels with proper configuration to prevent scroll issues
    setTimeout(() => {
      // Handle main carousel (index.html)
      const mainCarousel = document.getElementById("myCarousel");
      if (mainCarousel && window.bootstrap && window.bootstrap.Carousel) {
        const bsCarousel = new window.bootstrap.Carousel(mainCarousel, {
          interval: 3000,
          ride: "carousel",
          pause: "hover", // Pause on hover to prevent interruption while viewing content below
          wrap: true,
          keyboard: false, // Disable keyboard navigation to prevent unexpected behavior
        });

        // Prevent carousel from scrolling page when transitioning
        mainCarousel.addEventListener("slide.bs.carousel", function (e) {
          // Don't interrupt user scroll behavior
          e.preventDefault = function () {};
        });

        // Pause carousel when user scrolls past it
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Carousel is visible, resume auto-play
                bsCarousel.cycle();
              } else {
                // Carousel is not visible, pause auto-play
                bsCarousel.pause();
              }
            });
          },
          {
            threshold: 0.5, // Trigger when 50% of carousel is visible
          }
        );

        observer.observe(mainCarousel);
      }

      // Handle team carousel (overview.html)
      const teamCarousel = document.getElementById("teamCarousel");
      if (teamCarousel && window.bootstrap && window.bootstrap.Carousel) {
        const teamBsCarousel = new window.bootstrap.Carousel(teamCarousel, {
          interval: 3000,
          ride: "carousel",
          pause: "hover",
          wrap: true,
          keyboard: false,
        });

        // Prevent team carousel from scrolling page when transitioning
        teamCarousel.addEventListener("slide.bs.carousel", function (e) {
          e.preventDefault = function () {};
        });

        // Pause team carousel when user scrolls past it
        const teamObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                teamBsCarousel.cycle();
              } else {
                teamBsCarousel.pause();
              }
            });
          },
          {
            threshold: 0.5,
          }
        );

        teamObserver.observe(teamCarousel);
      }

      // Initialize any other carousels with standard settings
      const otherCarousels = document.querySelectorAll(
        ".carousel:not(#myCarousel):not(#teamCarousel)"
      );
      otherCarousels.forEach((carousel) => {
        if (window.bootstrap && window.bootstrap.Carousel) {
          new window.bootstrap.Carousel(carousel, {
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
