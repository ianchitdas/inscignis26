(function() {
  // Hide preloader when page loads
  function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      // Add fade-out class
      preloader.classList.add('fade-out');
      // Remove from DOM after animation completes (0.8s)
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 800);
    }
  }

  // Hide preloader when page is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hidePreloader);
  } else {
    hidePreloader();
  }

  // Also hide on window load (backup)
  window.addEventListener('load', hidePreloader);
})();