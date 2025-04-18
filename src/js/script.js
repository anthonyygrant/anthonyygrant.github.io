document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to My Portfolio";
    const typedText = document.getElementById("typed-text");
    const cursor = document.getElementById("cursor");
    const backToTopButton = document.getElementById("back-to-top");
    const homeSection = document.getElementById("home");
    const themeCheckbox = document.getElementById("theme-checkbox");
    const overlay = document.getElementById("theme-fade-overlay");
    const body = document.body;
  
    const savedTheme = localStorage.getItem("theme");
  
    const applySavedTheme = () => {
      if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeCheckbox.checked = true;
      } else {
        body.classList.remove("dark-mode");
        themeCheckbox.checked = false;
      }
    };
  
    applySavedTheme();
  
    if (themeCheckbox && overlay) {
      themeCheckbox.addEventListener("change", () => {
        overlay.classList.add("active");
  
        setTimeout(() => {
          body.classList.toggle("dark-mode");
          const isDark = body.classList.contains("dark-mode");
          localStorage.setItem("theme", isDark ? "dark" : "light");
        }, 200);
  
        setTimeout(() => {
          overlay.classList.remove("active");
        }, 600);
      });
    }
  
    let i = 0;
    const speed = 100;
  
    if (typedText && cursor) {
      function typeChar() {
        if (i < text.length) {
          typedText.textContent += text.charAt(i);
          i++;
          setTimeout(typeChar, speed);
        } else {
          setTimeout(() => {
            cursor.style.animation = "fade-caret 1s ease-out forwards";
          }, 1500);
        }
      }
      typeChar();
    }
  
    window.scrollToHome = () => {
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, null, window.location.pathname);
      }
    };
  
    if (backToTopButton && homeSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              backToTopButton.classList.remove("show");
            } else {
              backToTopButton.classList.add("show");
            }
          });
        },
        {
          root: null,
          threshold: 0.6,
        }
      );
  
      observer.observe(homeSection);
    }
  });
  