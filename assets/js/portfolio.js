// Portfolio filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const categoryTags = document.querySelectorAll('.category-tag');

  // Function to apply filter
  function applyFilter(filterValue) {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    const activeButton = Array.from(filterButtons).find(btn => btn.getAttribute('data-filter') === filterValue);
    if (activeButton) {
      activeButton.classList.add('active');
    }

    // Filter items
    portfolioItems.forEach(item => {
      const itemCategories = item.getAttribute('data-category');
      // Split by space to handle multiple categories
      const categoriesArray = itemCategories ? itemCategories.split(' ') : [];

      // Check if filter matches any of the item's categories
      const matchesFilter = filterValue === 'all' || categoriesArray.includes(filterValue);

      if (matchesFilter) {
        item.classList.remove('hidden');
        // Trigger reflow for smooth animation
        setTimeout(() => {
          item.style.opacity = '1';
        }, 10);
      } else {
        item.style.opacity = '0';
        setTimeout(() => {
          item.classList.add('hidden');
        }, 300);
      }
    });
  }

  // Filter button click handlers
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      applyFilter(filterValue);
    });
  });

  // Category tag click handlers
  categoryTags.forEach(tag => {
    tag.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const filterValue = this.getAttribute('data-category');
      applyFilter(filterValue);
    });
  });
});
