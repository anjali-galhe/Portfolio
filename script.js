// Dark/Light Mode Toggle
const toggleTheme = document.createElement("button");
toggleTheme.innerText = "🌙";
toggleTheme.style.position = "fixed";
toggleTheme.style.right = "20px";
toggleTheme.style.bottom = "20px";
toggleTheme.style.padding = "10px 15px";
toggleTheme.style.borderRadius = "50%";
toggleTheme.style.border = "none";
toggleTheme.style.cursor = "pointer";
toggleTheme.style.fontSize = "1.2rem";
document.body.appendChild(toggleTheme);

let darkMode = true;
toggleTheme.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.style.background = darkMode
        ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
        : "linear-gradient(135deg, #ffffff, #f0f0f0, #dcdcdc)";
    document.body.style.color = darkMode ? "white" : "#333";
    toggleTheme.innerText = darkMode ? "🌙" : "☀";
});

// Scroll Animations (AOS.js)
document.querySelectorAll("section, .card, .skill-card").forEach(el => {
    el.setAttribute("data-aos", "fade-up");
});

// Initialize AOS after page load
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800,
        once: true
    });
});