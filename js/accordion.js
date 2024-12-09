


const accordionItems = document.querySelectorAll('.accordion__item');
const tabImage = document.getElementById('tabImage');
let lastSelectedIndex = 0; // Track the last selected tab index

// Initialize: Ensure the first tab is active and the image is set correctly
document.addEventListener('DOMContentLoaded', () => {
  const firstTab = accordionItems[0];
  const initialImage = firstTab.getAttribute('data-image');

  // Set the first tab's image
  tabImage.src = initialImage;
  tabImage.classList.add('from-bottom'); // Animate the initial image (optional)
});

accordionItems.forEach((item, index) => {
  const header = item.querySelector('.accordion__header');

  header.addEventListener('click', () => {
    // Collapse other accordion items
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    // Toggle the clicked accordion item
    item.classList.toggle('active');

    // Update the image with transition
    if (item.classList.contains('active')) {
      const imageSrc = item.getAttribute('data-image');
      const isFromBottom = index > lastSelectedIndex; // If clicked tab is below, animate from bottom

      // Reset the image animation classes
      tabImage.classList.remove('from-bottom', 'from-top');
      tabImage.style.top = '';
      tabImage.style.bottom = '';

      // Apply direction-specific animation class
      setTimeout(() => {
        tabImage.src = imageSrc; // Change the image
        if (isFromBottom) {
          tabImage.classList.add('from-bottom'); // Animate from bottom
        } else {
          tabImage.classList.add('from-top'); // Animate from top
        }
      }, 100); // Small delay to ensure smooth transition

      // Update the last selected index
      lastSelectedIndex = index;
    }
  });
});
