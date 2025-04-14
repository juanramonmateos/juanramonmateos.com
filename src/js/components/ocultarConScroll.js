
(function () {
    const elem = document.getElementById('videoFondo');
  
    if (!elem) return;
  
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
  
      if (scrollY > screenHeight) {
        elem.style.display = 'none';
      } else {
        elem.style.display = 'block';
      }
    });
  })();