window.onload = function() {
    heroHeight();
    window.addEventListener("resize", heroHeight);
    prepareNav();
    prepareScroller();
}

/*Sets the hero height to window height (minus topbar and padding above portfolio)*/
function heroHeight() {
    var windowHeight = window.innerHeight;
    var navBarHeight = document.getElementById("nav_header_inner").clientHeight;
    var bufferHeight = document.getElementById("portfolio_above").clientHeight;
    var heroHeight = windowHeight - navBarHeight - bufferHeight;
    document.getElementById("hero_header").style.height = heroHeight + "px";
    console.log(heroHeight);
}

/*Toggles the dropdownmenu*/
function prepareNav() {
    document.getElementById("hamburger").onclick = toggleNav;
    var menuItems = document.getElementsByClassName("hidenav");
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].onclick = toggleNav;
    }
}

function toggleNav() {
    var element = document.getElementById("dropdown_nav");
    element.classList.toggle("show_it");
}

/*function toggleNavB {
    if (document.getElementById("dropdown_nav").style.display == "none") {
        document.getElementById("dropdown_nav").style.display = "block";
    }
    else {
        document.getElementById("dropdown_nav").style.display = "none";
    }
}*/

/*Scroll to top function */
function prepareScroller() {
    document.getElementById("nav_name").onclick = scroller;
    document.getElementById("back_to_top").onclick = scroller;
}

function scroller() {
    window.scrollTo(0,0);
}

//Checks if the contact form entries are valid upon clicking the send button
document.getElementById("contact_send").onclick = function() {
    var name = document.getElementById("contact_name").value;
    var email = document.getElementById("contact_email").value;
    var message = document.getElementById("contact_message").value;
    if (!name) {
        alert("You didn't tell me your name!");
        return;
    }
    if (!email) {
        alert("You didn't tell me your email!");
        return;
    }
    var mailCheck1 = email.split(" ");
    var mailCheck2 = email.split('@');
    var mailCheck3 = mailCheck2[1].split(".");
    if (mailCheck1.length != 1 || mailCheck2.length != 2 || mailCheck3.length < 2 || mailCheck2[0].length < 1) {
        alert("You didn't provide a valid email.");
        return;
    }
    for (var i = 0; i < mailCheck3.length; i++) {
        if (mailCheck3[i].length < 1) {
            alert("You didn't provide a valid email.");
            return;
        }
    }
    if (!message) {
        alert("You didn't write me a message!");
        return;
    }   
    alert("Hi " + name + "! \nUnfortunately this contact form doesn't work yet. Please send me an email at dorieke90@gmail.com, and I will get back to you as soon as possible!");
}