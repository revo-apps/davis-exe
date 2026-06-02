// Preload script for security
window.addEventListener('DOMContentLoaded', () => {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  // Disable keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.metaKey && e.altKey && e.key === 'i') ||
        (e.metaKey && e.key === 'r') ||
        (e.ctrlKey && e.key === 'r')) {
      e.preventDefault();
    }
  });
});
