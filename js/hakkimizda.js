// Hakkımızda sayfası JavaScript işlevselliği
document.addEventListener("DOMContentLoaded", function () {
  // History section functionality
  const historySection = document.getElementById("history-section");
  const historyCard = document.getElementById("history-card");
  const historyButtons = document.querySelectorAll(".history-btn");

  // History data
  const historyData = {
    1950: {
      year: "1950",
      title: "The Beginning",
      desc: "Our story begins in 1950, when John Doe founded our third-generation financial planning firm.",
      className: "year-1950",
    },
    2004: {
      year: "2004",
      title: "Expansion Era",
      desc: "In 2004, we expanded our services to include comprehensive investment management and wealth planning solutions.",
      className: "year-2004",
    },
    2014: {
      year: "2014",
      title: "Digital Innovation",
      desc: "2014 marked our digital transformation, introducing cutting-edge technology to enhance client experience and service delivery.",
      className: "year-2014",
    },
    2024: {
      year: "2024",
      title: "Future Forward",
      desc: "Today in 2024, we continue to lead with innovative financial solutions, serving thousands of satisfied clients worldwide.",
      className: "year-2024",
    },
  };

  // Function to update history content
  function updateHistoryContent(year) {
    const data = historyData[year];
    if (!data) return;

    // Update background class
    historySection.className = `history-section ${data.className}`;

    // Update card content with animation
    historyCard.style.opacity = "0";
    historyCard.style.transform = "translateY(20px)";

    setTimeout(() => {
      historyCard.querySelector(".history-year").textContent = data.year;
      historyCard.querySelector(".history-title").textContent = data.title;
      historyCard.querySelector(".history-desc").textContent = data.desc;

      historyCard.style.opacity = "1";
      historyCard.style.transform = "translateY(0)";
    }, 300);

    // Update active button
    historyButtons.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.year === year) {
        btn.classList.add("active");
      }
    });
  }

  // Add click event listeners to history buttons
  historyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const year = this.dataset.year;
      updateHistoryContent(year);
    });
  });

  // Initialize with first year
  updateHistoryContent("1950");

  // Auto-cycle through years (optional)
  let currentIndex = 0;
  const years = Object.keys(historyData);

  function autoAdvance() {
    currentIndex = (currentIndex + 1) % years.length;
    updateHistoryContent(years[currentIndex]);
  }

  // Uncomment the line below to enable auto-advance every 5 seconds
  // setInterval(autoAdvance, 5000);
});
