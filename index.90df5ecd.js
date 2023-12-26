const e=document.querySelectorAll("img[loading='lazy']"),n=()=>{const n=window.innerHeight/5*4;for(const o of e){o.getBoundingClientRect().top<n?o.classList.add("appear"):o.classList.remove("appear")}};n(),window.addEventListener("scroll",n);
//# sourceMappingURL=index.90df5ecd.js.map
