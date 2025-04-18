document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to My Capstone Portfolio";
    const typedText = document.getElementById("typed-text");
    const cursor = document.getElementById("cursor");
    const backToTopButton = document.getElementById("back-to-top");
    const homeSection = document.getElementById("home");
  
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
  
    // Scroll to top
    window.scrollToHome = () => {
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, null, window.location.pathname);
      }
    };
  
    // Show/hide Back to Top Button
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
  