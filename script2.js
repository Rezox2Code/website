let counter = 0;

const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;

    // Petit effet visuel
    counterDisplay.style.transform = "scale(1.3)";
    setTimeout(() => {
        counterDisplay.style.transform = "scale(1)";
    }, 150);
});

