// İletişim sayfası JavaScript işlevselliği
document.addEventListener("DOMContentLoaded", function () {
  // Contact form handling
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Form verilerini al
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      // Basit validasyon
      if (
        !data.firstName ||
        !data.lastName ||
        !data.email ||
        !data.phone ||
        !data.message
      ) {
        alert("Lütfen tüm zorunlu alanları doldurun.");
        return;
      }

      // Email validasyonu
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert("Lütfen geçerli bir e-posta adresi girin.");
        return;
      }

      // Telefon validasyonu (basit)
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(data.phone)) {
        alert("Lütfen geçerli bir telefon numarası girin.");
        return;
      }

      // Form gönderimi simülasyonu
      const submitBtn = contactForm.querySelector(".btn-submit");
      const originalText = submitBtn.innerHTML;

      // Loading state
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
      submitBtn.disabled = true;

      // Simulated API call
      setTimeout(() => {
        // Success state
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Gönderildi!';
        submitBtn.style.background = "#28a745";

        // Show success message
        alert(
          "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız."
        );

        // Reset form
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = "";
        }, 3000);
      }, 2000);
    });
  }

  // Smooth scroll for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
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

  // Phone number formatting
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");

      if (value.startsWith("90")) {
        value = value.substring(2);
      }

      if (value.length > 0) {
        if (value.length <= 3) {
          value = `(${value}`;
        } else if (value.length <= 6) {
          value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
        } else if (value.length <= 8) {
          value = `(${value.substring(0, 3)}) ${value.substring(
            3,
            6
          )} ${value.substring(6)}`;
        } else {
          value = `(${value.substring(0, 3)}) ${value.substring(
            3,
            6
          )} ${value.substring(6, 8)} ${value.substring(8, 10)}`;
        }
      }

      e.target.value = value;
    });
  }

  // Contact info animations
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

  // Observe contact info items
  const contactItems = document.querySelectorAll(
    ".contact-info-item, .quick-info-item"
  );
  contactItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "all 0.6s ease";
    observer.observe(item);
  });
});
