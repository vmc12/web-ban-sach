const body = document.querySelector("body");
const modeToggle = document.querySelector("body > nav > div > div > ul > li.nav-item.toggle-theme");




modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
})
