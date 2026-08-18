// Index-page-only: reveal the .section blocks as they scroll into view.
// Reduced-motion users get the same result instantly, since the shared
// stylesheet zeroes transition-duration under that media query.
(function () {
  var sections = document.querySelectorAll('.section');
  if (!('IntersectionObserver' in window) || !sections.length) {
    sections.forEach(function (s) { s.classList.add('isVisible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('isVisible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  sections.forEach(function (s) { io.observe(s); });
})();