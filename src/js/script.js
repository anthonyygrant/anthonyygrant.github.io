const text = "Welcome to My Portfolio!";
const topBtn = document.getElementById("topBtn");
let index = 0;

function typeEffect() {
    document.getElementById("typing-text").innerText = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(typeEffect, 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", function () {
    window.scrollTop({ top: 0, behavior: "smooth" });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent! I'll get back to you soon.")

});