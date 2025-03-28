document.documentElement.style.setProperty('--start-color', '#E37400'); // Replace with your custom color
document.addEventListener("DOMContentLoaded", () => {
    const fadeTexts = document.querySelectorAll(".fade-text");

    fadeTexts.forEach((fadeText, index) => {
        fadeText.style.animation = `fade-in 1s forwards`;
        fadeText.style.animationDelay = `${index * 0.25}s`; // Adjust delay (0.5s delay for each)
    });
});
