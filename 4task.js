const toggleMenu = () => {
    links.classList.toggle("code");
    let shoemenu = menubar.firstElementChild;
    if (links.classList.contains("code")) {
        shoemenu.classList.replace("fa-bars", "fa-close");
    } else {
        shoemenu.classList.replace("fa-close", "fa-bars");
    }
}

const menubar = document.querySelector(".menubar");
const links = document.querySelector(".links");
menubar.addEventListener('click', toggleMenu);
