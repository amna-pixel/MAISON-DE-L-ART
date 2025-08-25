console.log("DOM Content Loaded!");

const navMenuIcon = document.querySelector(".nav-icon");
const navCloseIcon = document.querySelector(".nav-close-icon");
const menuBar = document.querySelector(".overlay");

navMenuIcon.addEventListener("click", showMenu);
navCloseIcon.addEventListener("click", closeMenu);


//Function for closing the nav menu on clicking on body
document.body.addEventListener("click",function(e){
    if (menuBar.classList.contains("show") && 
        !menuBar.contains(e.target) && 
        !navMenuIcon.contains(e.target)) {
        closeMenu();
    }
})



//Function to create and show the nav menu from the right side
function showMenu(){
    navMenuIcon.style.display = "none";
    navCloseIcon.style.display = "block";



    const menuBarlinks = document.querySelectorAll(".navbar ul .underline");
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


//Function for closing the menu by clicking on the close icon
function closeMenu(){
    navMenuIcon.style.display = "block";
    navCloseIcon.style.display = "none";
    const navLogo = document.querySelector("#logo");
    navLogo.style.marginTop = "-20px";
    menuBar.classList.remove("show");

}


