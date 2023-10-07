function loadIframe() {
    var iframe = document.getElementById('dcserver-embed');
    if (window.innerWidth <= 480) {
        iframe.style.visibility = "hidden";
        if (iframe.classList.contains("open")) {
            iframe.classList.remove("open");
        }
    } else {
        iframe.style.visibility = "visible";
        iframe.src = "https://discord.com/widget?id=1109530644578582590&theme=dark";
        if (!iframe.classList.contains("open")) {
            iframe.classList.add("open");
        }
    }
}
window.addEventListener('load', loadIframe);
window.addEventListener('resize', loadIframe);