console.log("DOM Content Loaded!");

const navMenuIcon = document.querySelector(".nav-icon");
const navCloseIcon = document.querySelector(".nav-close-icon");
const menuBar = document.querySelector(".overlay");

navMenuIcon.addEventListener("click", showMenu);
navCloseIcon.addEventListener("click", closeMenu);

function showMenu(){
    navMenuIcon.style.display = "none";
    navCloseIcon.style.display = "block";

    const menuBarlinks = document.querySelectorAll(".underline");
    menuBar.classList.add("show");
    const navLogo = document.querySelector("#logo");
    navLogo.style.marginTop = "0px";
    
    if (!menuBar.querySelector(".menu-Header")) {
        const menuHeader = document.createElement("h2");
        menuHeader.textContent = "Menu";
        menuHeader.className = "menu-Header";
        menuBar.appendChild(menuHeader);
    }


    menuBarlinks.forEach(link => {
        link.style.display = "block"; 
        menuBar.appendChild(link);
    });
    
    
}

function closeMenu(){
    navMenuIcon.style.display = "block";
    navCloseIcon.style.display = "none";
    const navLogo = document.querySelector("#logo");
    navLogo.style.marginTop = "-20px";
    menuBar.classList.remove("show");
}
