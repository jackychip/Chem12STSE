const hiddenNavBarText = document.getElementById("hidden-nav-text");
const mainNavBarText = document.getElementById("main-nav-text");
const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    let scrollTop =  document.documentElement.scrollTop;
    let headerHeight = header.clientHeight;

    if (scrollTop > headerHeight) {
        mainNavBarText.style.opacity = 0;
        hiddenNavBarText.style.opacity = scrollTop / (headerHeight * 4);
    }
    else {
        mainNavBarText.style.opacity = 1;
        hiddenNavBarText.style.opacity = 0;
    }

}, false);