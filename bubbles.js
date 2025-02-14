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

    const bubbleContainer = document.getElementById('bubble-container');
    const bubbleData = bubbles[currentIndex];

    // Create a new bubble div
    const bubbleDiv = document.createElement('div');
    bubbleDiv.classList.add('bubble'); // Apply the same bubble style from .overlay

    // Add text and image (if any)
    bubbleDiv.innerHTML = `<p>${bubbleData.text}</p>`;
    if (bubbleData.image) {
        bubbleDiv.innerHTML += `<img src="images/${bubbleData.image}" alt="">`;
    }

    // Append the new bubble to the container
    bubbleContainer.appendChild(bubbleDiv);

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
