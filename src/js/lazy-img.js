// const lazyImage = document.querySelectorAll("img[loading='lazy']");

// lazyImage.forEach(images => {
//   images.addEventListener('load', onImageLoaded);
// });

// function onImageLoaded(event) {
//   event.target.classList.add('appear');
// }

const boxes = document.querySelectorAll("img[loading='lazy']");

const checkBoxes = () => {
  const trigger = (window.innerHeight / 5) * 4;
  for (const box of boxes) {
    const topOfBox = box.getBoundingClientRect().top;
    if (topOfBox < trigger) {
      box.classList.add('appear');
    } else {
      box.classList.remove('appear');
    }
  }
};

checkBoxes();

window.addEventListener('scroll', checkBoxes);
