const lazyImage = document.querySelectorAll("img[loading='lazy']");

lazyImage.forEach(images => {
  images.addEventListener('load', onImageLoadet, { once: true });
});

function onImageLoadet(event) {
  event.target.classList.add('appear');
}
