function toggle_navbar() {
    var navbarLinks = document.querySelector(".navbar-links");
    menu_button = document.querySelector(".menu_button");
    navbarLinks.classList.toggle("show");
    menu_button.classList.toggle("menu_style");
}

function toggle_active_class1(){
    var navbarLinks = document.querySelector(".navbar-links");
    var link1 = document.querySelector(".home_links1");
    var link2 = document.querySelector(".home_links2");
    var link3 = document.querySelector(".home_links3");
    var link4 = document.querySelector(".home_links4");
    
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");
    
    link1.classList.add("active");
    navbarLinks.classList.toggle("show");
}

function toggle_active_class2(){
    var navbarLinks = document.querySelector(".navbar-links");
    var link1 = document.querySelector(".home_links1");
    var link2 = document.querySelector(".home_links2");
    var link3 = document.querySelector(".home_links3");
    var link4 = document.querySelector(".home_links4");

    link1.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");

    link2.classList.add("active");
    navbarLinks.classList.toggle("show");
}

function toggle_active_class3(){
    var navbarLinks = document.querySelector(".navbar-links");
    var link1 = document.querySelector(".home_links1");
    var link2 = document.querySelector(".home_links2");
    var link3 = document.querySelector(".home_links3");
    var link4 = document.querySelector(".home_links4");

    link1.classList.remove("active");
    link2.classList.remove("active");
    link4.classList.remove("active");

    link3.classList.add("active");
    navbarLinks.classList.toggle("show");
}

function toggle_active_class4(){
    var navbarLinks = document.querySelector(".navbar-links");
    var link1 = document.querySelector(".home_links1");
    var link2 = document.querySelector(".home_links2");
    var link3 = document.querySelector(".home_links3");
    var link4 = document.querySelector(".home_links4");

    link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    
    link4.classList.add("active");
    navbarLinks.classList.toggle("show");
}