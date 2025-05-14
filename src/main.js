const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');


const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');



menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
});

menuClose.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
});





filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove 'active' class
      document.querySelector('.filter-btn.active')?.classList.remove('text-red-500', 'font-bold', 'active');
      btn.classList.add('text-red-500', 'font-bold', 'active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const matches = filterValue === 'all' || item.classList.contains(filterValue);

        if (matches) {
          item.classList.remove('opacity-0', 'hidden');
          item.classList.add('opacity-100');
        } else {
          item.classList.remove('opacity-100');
          item.classList.add('opacity-0');
          setTimeout(() => {
            item.classList.add('hidden');
          }, 300); // Match the Tailwind duration
        }
      });

      // Unhide and fade-in matching items
      galleryItems.forEach(item => {
        const matches = filterValue === 'all' || item.classList.contains(filterValue);
        if (matches) {
          item.classList.remove('hidden');
          setTimeout(() => item.classList.add('opacity-100'), 50); // Slight delay for smooth transition
        }
      });
    });
  });