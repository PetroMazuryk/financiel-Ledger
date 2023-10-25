let panelBlog = document.querySelector('.blog__panel');
let openPanelBlogBtn = document.querySelector('.btn__blog');
let closePanelBlogBtn = panelBlog.querySelector('.blog__close');

openPanelBlogBtn.addEventListener('click', function () {
  panelBlog.classList.add('blog__panel--show');
});

closePanelBlogBtn.addEventListener('click', function () {
  panelBlog.classList.remove('blog__panel--show');
});
