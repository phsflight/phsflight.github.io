addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        // document.body.style.transform = "translate(0px,0px)";
        document.body.style.opacity = 1;
        updateNav();
    }, 100);
});

let pastTop = false;
const updateNav = () => {
    const below = (document.documentElement.scrollTop > window.innerHeight);
    const topNav = document.getElementsByTagName("nav").item(0);
    if (below) {
        if (pastTop) return;
        topNav.classList.remove("up")
        pastTop = true;
    }
    else {
        if (!pastTop) return;
        topNav.classList.add("up");
        pastTop = false;
    }
}

document.addEventListener("scroll", updateNav);