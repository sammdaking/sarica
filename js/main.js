// ===================================
// Main JavaScript
// ===================================

function initApp() {
  console.log("App Initialized - Starting setup...");

  // Check if dropdown elements exist
  const dropdownElements = document.querySelectorAll(
    ".has-dropdown, .has-mega-menu"
  );
  console.log("Found dropdown elements:", dropdownElements.length);

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's just "#"
      if (href === "#") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Mobile Menu Handler
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      console.log("Hamburger clicked"); // Debug log

      this.classList.toggle("active");
      nav.classList.toggle("active");
      if (header) header.classList.toggle("menu-open");

      // Prevent body scrolling when menu is open
      if (nav.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        if (header) header.classList.remove("menu-open");
        document.body.style.overflow = "";
      }
    });
  }

  // Bootstrap handles dropdowns now, no custom dropdown code needed
  console.log("Using Bootstrap dropdowns - no custom handlers required");

  // Header scroll effect
  const headerElement = document.querySelector(".header");
  let lastScroll = 0;

  if (headerElement) {
    window.addEventListener("scroll", function () {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        headerElement.style.background = "rgba(0, 0, 0, 0.85)";
        headerElement.style.backdropFilter = "blur(10px)";
        headerElement.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
      } else {
        headerElement.style.background = "transparent";
        headerElement.style.backdropFilter = "none";
        headerElement.style.boxShadow = "none";
      }

      lastScroll = currentScroll;
    });
  }

  // Hero cards click handlers with dynamic content
  const heroCardElements = document.querySelectorAll(".hero-card");
  const heroSection = document.getElementById("hero-section");
  const heroTitle = document.getElementById("hero-title");
  const heroCta = document.getElementById("hero-cta");

  // Hero content data
  const heroContent = {
    bireysel: {
      title: "Her alanda,<br />Her anında sigorta.",
      cta: "Hemen Teklif Al",
      bgClass: "bireysel-bg",
    },
    isyerim: {
      title: "İş Yeriniz İçin<br />Kapsamlı Koruma",
      cta: "Kurumsal Teklif Al",
      bgClass: "isyerim-bg",
    },
    rehber: {
      title: "Sigorta Rehberiniz<br />Burada",
      cta: "Rehberi İncele",
      bgClass: "rehber-bg",
    },
  };

  heroCardElements.forEach((card) => {
    card.addEventListener("click", function () {
      const section = this.getAttribute("data-section");

      console.log("Hero card clicked:", section); // Debug log

      // Remove active class from all cards
      heroCardElements.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked card
      this.classList.add("active");

      // Update hero content
      if (heroContent[section]) {
        const content = heroContent[section];

        console.log("Updating hero content:", content); // Debug log

        // Update title immediately
        if (heroTitle) {
          heroTitle.innerHTML = content.title;
        }

        // Update CTA button immediately
        if (heroCta && heroCta.querySelector("span")) {
          heroCta.querySelector("span").textContent = content.cta;
        }

        // Update background class immediately
        if (heroSection) {
          heroSection.className = `hero ${content.bgClass}`;
        }
      }
    });
  });

  // Add animation on scroll for cards (Simple fade in)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  heroCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Card arrow button handlers
  const cardArrowButtons = document.querySelectorAll(".card-arrow-btn");

  cardArrowButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const cardType = this.getAttribute("data-card");
      console.log("Card arrow clicked:", cardType);

      // Handle different card types
      switch (cardType) {
        case "hakkimizda":
          // Navigate to about page or section
          window.location.href = "#hakkimizda";
          break;
        case "basarilarimiz":
          // Navigate to achievements page or section
          window.location.href = "#basarilarimiz";
          break;
        case "sigorta-rehberi":
          // Navigate to insurance guide page or section
          window.location.href = "#sigorta-rehberi";
          break;
        default:
          console.log("Unknown card type:", cardType);
      }
    });
  });

  // Success Stories Slider Logic
  const track = document.querySelector(".success-slider-track");
  const slides = document.querySelectorAll(".success-slide");
  const dots = document.querySelectorAll(".dot");
  const sliderContainer = document.querySelector(".success-slider-container");

  console.log("Slider elements found:", {
    track: !!track,
    slides: slides.length,
    dots: dots.length,
    container: !!sliderContainer,
  });

  if (track && slides.length > 0) {
    let currentSlide = 0;
    let autoSlideInterval;

    const updateSlide = (index) => {
      console.log("Updating slide to:", index);
      // Ensure index is within bounds
      if (index >= slides.length) index = 0;
      if (index < 0) index = slides.length - 1;

      track.style.transform = `translateX(-${index * 100}%)`;

      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.remove("active");
        if (i === index) {
          dot.classList.add("active");
        }
      });

      currentSlide = index;
    };

    // Dot navigation - Fixed
    dots.forEach((dot, index) => {
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Dot clicked:", index);
        clearInterval(autoSlideInterval);
        updateSlide(index);
        startAutoSlide();
      });
    });

    // Mouse hover navigation - Fixed
    if (sliderContainer) {
      sliderContainer.addEventListener("mouseenter", () => {
        console.log("Mouse entered slider");
        clearInterval(autoSlideInterval);
      });

      sliderContainer.addEventListener("mouseleave", () => {
        console.log("Mouse left slider");
        startAutoSlide();
      });

      // Click navigation on slides - Fixed
      slides.forEach((slide, index) => {
        slide.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("Slide clicked:", index);
          clearInterval(autoSlideInterval);
          const nextSlide = (currentSlide + 1) % slides.length;
          updateSlide(nextSlide);
          startAutoSlide();
        });
      });

      // Keyboard navigation
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
          clearInterval(autoSlideInterval);
          const prevSlide =
            currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
          updateSlide(prevSlide);
          startAutoSlide();
        } else if (e.key === "ArrowRight") {
          clearInterval(autoSlideInterval);
          const nextSlide = (currentSlide + 1) % slides.length;
          updateSlide(nextSlide);
          startAutoSlide();
        }
      });
    }

    // Auto-slide functionality
    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        const nextSlide = (currentSlide + 1) % slides.length;
        updateSlide(nextSlide);
      }, 5000);
    };

    // Start auto-slide
    startAutoSlide();
  } else {
    console.log("Slider elements not found or insufficient slides");
  }
}

// Listen for components loaded event
document.addEventListener("componentsLoaded", function () {
  console.log("Components loaded, initializing app...");
  // Small delay to ensure DOM is fully ready
  setTimeout(initApp, 100);
});

// Also try to init on DOMContentLoaded in case components are already present (static)
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, checking for header...");
  if (document.querySelector(".header")) {
    console.log("Header found, initializing app...");
    initApp();
  }
});

// Prevent default for placeholder links
document.addEventListener("click", function (e) {
  if (e.target.tagName === "A" && e.target.getAttribute("href") === "#") {
    e.preventDefault();
  }
});
