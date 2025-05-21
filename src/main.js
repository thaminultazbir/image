const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Mobile menu toggle
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
});

// Gallery filter functionality
function filterGallery(category) {
  const items = document.querySelectorAll(".item");

  items.forEach((item, i) => {
    const isVisible = category === "all" || item.classList.contains(category);

    // Delay each animation slightly (staggered)
    setTimeout(() => {
      if (isVisible) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    }, i * 50); // 50ms stagger per item
  });
}
