var panel = document.querySelector('.panel');
var openPanelButton = document.querySelector('.btn__services');
var closePanelButton = panel.querySelector('.button__close');
openPanelButton.addEventListener('click', function () {
  panel.classList.add('panel--show');
});

closePanelButton.addEventListener('click', function () {
  panel.classList.remove('panel--show');
});
