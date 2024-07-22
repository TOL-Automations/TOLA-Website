document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    window.addEventListener('scroll', function () {
      navbar.classList.toggle('sticky', window.scrollY > 0);
  });
  
  hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('show');
  });
});
document.addEventListener('DOMContentLoaded', function () {
    var word = 'Autopilot?',
        part,
        offset = 0,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 100;
  
    function type() {
      setInterval(function () {
        if (forwards) {
          if (offset >= word.length) {
            ++skip_count;
            if (skip_count == skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset == 0) {
            forwards = true;
            offset = 0;
          }
        }
        part = word.substr(0, offset);
        if (skip_count == 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
        document.querySelector('.typing-word').textContent = part;
      }, speed);
    }
  
    type();
  });
  function hamburger() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
