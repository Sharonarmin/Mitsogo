// Function to load the SVG sprite file
function loadSvgSprite(url) {
    fetch(url)
        .then(response => response.text())
            .then(data => {
                const container = document.getElementById('svg-sprite-container');
                container.innerHTML = data;
        })
    .catch(error => console.error('Error loading SVG sprite:', error));
}

// Load the sprite.svg file from the svg folder
document.addEventListener('DOMContentLoaded', function() {
    loadSvgSprite('/svg/sprite.svg');
});



