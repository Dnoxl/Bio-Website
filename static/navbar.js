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
        var x = document.getElementById("proj-list");
        if (x.style.display === "flex") {
            x.style.display = "none";
        }
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
        }
        currentRotation = "0deg";
        document.getElementById("navLogo").style.transform = "rotate(0deg)";
    }
};
function toggleProj() {
    var x = document.getElementById("proj-list");
    if (x.style.display === "none") {
        x.style.display = "flex";
        setProjListPosition()
    } else {
        x.style.display = "none";
    }
}
function setProjListPosition() {
    var projButton = document.getElementById("proj-button");
    var projList = document.getElementById("proj-list");
    var buttonRect = projButton.getBoundingClientRect();
    var listWidth = projList.getBoundingClientRect().width/2;
    var centerX = buttonRect.left + buttonRect.width / 2;
    projList.style.left = (centerX - listWidth) + "px";
    console.log(listWidth)
}
window.addEventListener("resize", setProjListPosition);
