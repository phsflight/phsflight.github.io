addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        // document.body.style.transform = "translate(0px,0px)";
        document.body.style.opacity = 1;
    }, 100);
});

let pastTop = false;

document.addEventListener("scroll", e => {
    console.log(document.documentElement.scrollTop);
    const below = (document.documentElement.scrollTop > window.innerHeight);
    const topNav = document.getElementsByTagName("nav").item(0);
    if (document.documentElement.scrollTop > window.innerHeight) {
        if (pastTop) return;
        topNav.classList.remove("up")
        pastTop = true;
    }
    else {
        if (!pastTop) return;
        topNav.classList.add("up");
        pastTop = false;
    }
})