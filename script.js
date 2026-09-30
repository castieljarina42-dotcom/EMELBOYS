// Website loaded
console.log("My School Projects website is running!");

// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});