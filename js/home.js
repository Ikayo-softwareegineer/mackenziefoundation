document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId)?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // Sticky Navbar Effect
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    // Hero Section Fade-In Effect
    const heroSection = document.querySelector(".hero-section");
    heroSection.classList.add("fade-in");
});
