var currentRotation = "0deg";
function logoOver() {
    var logo = document.getElementById("navLogo");
    logo.style.transform = "scale(1.025) rotate(" + currentRotation + ")";
};
function logoOut() {
    var logo = document.getElementById("navLogo");
    logo.style.transform = "scale(1.0) rotate(" + currentRotation + ")";
};
function toggleNav() {
    var logo = document.getElementById("navLogo");
    var nav = document.getElementById("myNav");
    if (window.innerWidth < 480) {
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
            currentRotation = "0deg";
        } else {
            nav.classList.add("open");
            currentRotation = "180deg";
        }
        logo.style.transform = "rotate(" + currentRotation + ")";
    }
    else {
        window.location.href = "/home";
    }
};
function resize() {
    if (window.innerWidth > 480) {
        nav = document.getElementById("myNav")
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
        }
        currentRotation = "0deg";
        document.getElementById("navLogo").style.transform = "rotate(0deg)";
    }
    if (window.innerWidth < 480) {
        nav = document.getElementById("myNav")
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
        }
        currentRotation = "0deg";
        document.getElementById("navLogo").style.transform = "rotate(0deg)";
    }
}
