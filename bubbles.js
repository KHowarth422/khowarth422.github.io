let bubbles = [];
let currentIndex = 0;

// Load bubbles from JSON
fetch('bubbles.json')
    .then(response => response.json())
    .then(data => {
        bubbles = data;
        showNextBubble();
    });

function showNextBubble() {
    if (currentIndex >= bubbles.length) return; // Stop if out of bubbles

    const bubbleContainer = document.getElementById('bubble');
    const bubbleData = bubbles[currentIndex];

    // Create bubble content inside the overlay
    bubbleContainer.innerHTML = `<p>${bubbleData.text}</p>`;
    if (bubbleData.image) {
        bubbleContainer.innerHTML += `<img src="${bubbleData.image}" alt="">`;
    }

    currentIndex++;
}

// Detect clicks or spacebar press
document.addEventListener('click', showNextBubble);
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent page scrolling
        showNextBubble();
    }
});
