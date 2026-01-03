// Kurumsal Çözümler Page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Accordion functionality
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const accordionItem = this.parentElement;
      const content = document.getElementById(targetId);

      // Close all other accordion items
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          const otherItem = otherHeader.parentElement;
          const otherTargetId = otherHeader.getAttribute("data-target");
          const otherContent = document.getElementById(otherTargetId);

          otherItem.classList.remove("active");
          if (otherContent) {
            otherContent.style.maxHeight = "0";
          }
        }
      });

      // Toggle current accordion item
      accordionItem.classList.toggle("active");

      if (accordionItem.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0";
      }
    });
  });

  // Testimonials slider functionality
  const track = document.getElementById("testimonialsTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const testimonials = document.querySelectorAll(".testimonial-card");

  if (track && testimonials.length > 0) {
    let currentIndex = 0;
    const totalTestimonials = testimonials.length;

    function updateSlider() {
      const translateX = -currentIndex * 100;
      track.style.transform = `translateX(${translateX}%)`;
    }

    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % totalTestimonials;
      updateSlider();
    }

    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
      updateSlider();
    }

    // Event listeners for navigation buttons
    if (nextBtn) {
      nextBtn.addEventListener("click", nextTestimonial);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", prevTestimonial);
    }

    // Auto-slide functionality (optional)
    let autoSlideInterval = setInterval(nextTestimonial, 5000);

    // Pause auto-slide on hover
    const testimonialsSection = document.querySelector(".testimonials-slider");
    if (testimonialsSection) {
      testimonialsSection.addEventListener("mouseenter", () => {
        clearInterval(autoSlideInterval);
      });

      testimonialsSection.addEventListener("mouseleave", () => {
        autoSlideInterval = setInterval(nextTestimonial, 5000);
      });
    }

    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;

    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = startX - endX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next testimonial
          nextTestimonial();
        } else {
          // Swipe right - previous testimonial
          prevTestimonial();
        }
      }
    }
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Animation on scroll (optional)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".process-step, .testimonial-card, .philosophy-content"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});
