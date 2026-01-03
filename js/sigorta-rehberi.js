// Sigorta Rehberi sayfası JavaScript işlevselliği
document.addEventListener("DOMContentLoaded", function () {
  // FAQ Accordion functionality
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      // Close other open items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Smooth scroll for anchor links
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

  // Guide link interactions
  const guideLinks = document.querySelectorAll(".guide-link");
  guideLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Show a modal or expand content (placeholder functionality)
      const linkText = this.textContent;
      alert(
        `${linkText} bölümü yakında eklenecek. Detaylı bilgi için bizimle iletişime geçin.`
      );
    });
  });

  // Intersection Observer for animations
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

  // Observe category cards
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Observe FAQ items
  const faqCategories = document.querySelectorAll(".faq-category");
  faqCategories.forEach((category, index) => {
    category.style.opacity = "0";
    category.style.transform = "translateY(20px)";
    category.style.transition = `all 0.6s ease ${index * 0.2}s`;
    observer.observe(category);
  });

  // Stats counter animation
  const statsNumbers = document.querySelectorAll(".guide-stat .stat-number");
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = target.textContent;

          // Extract number from text
          const numberMatch = finalValue.match(/\d+/);
          if (numberMatch) {
            const number = parseInt(numberMatch[0]);
            const suffix = finalValue.replace(number.toString(), "");

            // Animate counter
            let current = 0;
            const increment = number / 30;
            const timer = setInterval(() => {
              current += increment;
              if (current >= number) {
                current = number;
                clearInterval(timer);
              }
              target.textContent = Math.floor(current) + suffix;
            }, 50);
          }

          statsObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statsNumbers.forEach((stat) => {
    statsObserver.observe(stat);
  });

  // Search functionality (placeholder)
  function initSearch() {
    const searchInput = document.getElementById("guide-search");
    if (searchInput) {
      searchInput.addEventListener("input", function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const guideItems = document.querySelectorAll(".guide-item");

        guideItems.forEach((item) => {
          const title = item.querySelector("h4").textContent.toLowerCase();
          const content = item.querySelector("p").textContent.toLowerCase();

          if (title.includes(searchTerm) || content.includes(searchTerm)) {
            item.style.display = "block";
          } else {
            item.style.display = searchTerm === "" ? "block" : "none";
          }
        });
      });
    }
  }

  initSearch();

  // Category filter functionality
  function initCategoryFilter() {
    const filterButtons = document.querySelectorAll(".category-filter");
    const categoryCards = document.querySelectorAll(".category-card");

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filter = this.dataset.filter;

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // Filter cards
        categoryCards.forEach((card) => {
          if (filter === "all" || card.dataset.category === filter) {
            card.style.display = "block";
            card.style.opacity = "1";
          } else {
            card.style.display = "none";
            card.style.opacity = "0";
          }
        });
      });
    });
  }

  initCategoryFilter();
});
