document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to My Capstone Portfolio";
    const typedText = document.getElementById("typed-text");
    const cursor = document.getElementById("cursor");
    const backToTopButton = document.getElementById("back-to-top");
    let i = 0;
    const speed = 100;
  
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
  
    // Scroll to home and remove hash from URL
    window.scrollToHome = () => {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
      history.pushState(null, null, window.location.pathname);
    };
  
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
  
    const homeSection = document.getElementById("home");
    if (homeSection) {
      observer.observe(homeSection);
    }
  
    typeChar();
  });
  