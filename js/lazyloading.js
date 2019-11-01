let images = document.querySelectorAll('img[data-src]'');

const preloadImage = (img) => {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  });

  images.forEach((image) => {
    imgObserver.observe(image);
  });
} else {
  images.forEach((image) => {
    preloadImage(image);
  });
}
