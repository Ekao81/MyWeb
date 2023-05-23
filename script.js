const primaryNav = document.querySelector(".primary-navigation");
const menuToggle = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visibility")

    if (visibility === "false") {
        primaryNav.setAttribute("data-visibility", true);
        menuToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visibility", false);
        menuToggle.setAttribute("aria-expanded", false);
    }
});

