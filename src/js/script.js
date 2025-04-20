document.addEventListener("DOMContentLoaded", () => {
    const line1 = "Welcome to My Portfolio!";
    const line2 = "Check Out My Work";
  
    const typedText = document.getElementById("typed-text");
    const cursor = document.getElementById("cursor");
    const downArrow = document.getElementById("down-arrow");
    const backToTopButton = document.getElementById("back-to-top");
    const homeSection = document.getElementById("home");
    const themeCheckbox = document.getElementById("theme-checkbox");
    const overlay = document.getElementById("theme-fade-overlay");
    const body = document.body;
  
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
      themeCheckbox.checked = true;
    } else {
      themeCheckbox.checked = false;
    }
  
    themeCheckbox?.addEventListener("change", () => {
      overlay.classList.add("active");
      setTimeout(() => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
      }, 200);
      setTimeout(() => {
        overlay.classList.remove("active");
      }, 600);
    });
  
    // Typing effect
    const speed = 50;
    let i = 0, j = 0;
  
    function typeLine1() {
      if (i < line1.length) {
        typedText.innerHTML += line1.charAt(i++);
        setTimeout(typeLine1, speed);
      } else {
        typedText.innerHTML += "<br>";
        setTimeout(typeLine2, 400);
      }
    }
  
    function typeLine2() {
      if (j < line2.length) {
        typedText.innerHTML += line2.charAt(j++);
        setTimeout(typeLine2, speed);
      } else {
        cursor.style.animation = "fade-caret 1s ease-out forwards";
        downArrow?.classList.add("show");
      }
    }
  
    typeLine1();
  
    // Scroll to home
    window.scrollToHome = () => {
      homeSection?.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, null, window.location.pathname);
    };
  
    // Back to top visibility toggle
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          backToTopButton.classList.toggle("show", !entry.isIntersecting);
        });
      },
      { threshold: 0.6 }
    );
  
    observer.observe(homeSection);
  });
  