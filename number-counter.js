function formatNumber(number) {
    const suffixes = ["", "K", "M", "B", "T"]; // Add more as needed
    let suffixIndex = 0;
  
    // Loop through suffixes until the number is smaller than 1,000
    while (number >= 1000 && suffixIndex < suffixes.length - 1) {
        number /= 1000;
        suffixIndex++;
    }

    // Return the number with the appropriate suffix
    return `${Math.round(number)}${suffixes[suffixIndex]}`;
}

function animateCounter(counterElement, targetValue, duration = 2000) {
    const startValue = 0; // Start from 0
    const startTime = performance.now();

    function update() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Progress between 0 and 1

        // Calculate the current value based on progress
        const currentValue = Math.floor(startValue + (targetValue - startValue) * progress);

        // Update the text content with the formatted value
        counterElement.textContent = formatNumber(currentValue);

        // Continue animation if we haven't reached the target value yet
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            // Ensure it stops exactly at the target value
            counterElement.textContent = formatNumber(targetValue);
        }
    }

    // Start the animation
    requestAnimationFrame(update);
}

// Example: Setting up the counters with different target values
const targetValues = [57, 173, 47708000, 1000000000000]; // The target values for each counter
const counters = document.querySelectorAll('.counter'); // Select all counter elements

// Animate each counter with the corresponding target value
counters.forEach((counter, index) => {
    animateCounter(counter, targetValues[index], 3000); // Animate each for 3 seconds
});
