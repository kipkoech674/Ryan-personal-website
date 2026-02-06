/* DARK MODE TOGGLE */
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

/* FORM VALIDATION */
function validateForm(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    if(!name || !email) return true; // skip if form doesn't exist on this page

    if(name.value === "" || email.value === ""){
        alert("Please fill in all required fields.");
        return false;
    }

    alert("Thank you! Your message has been sent.");
    return true;
}

/* RUN AFTER DOM LOAD */
document.addEventListener("DOMContentLoaded", function() {
    
    /* FADE-IN ANIMATION ON SCROLL */
    const sections = document.querySelectorAll(".container");
    if(sections.length > 0){
        window.addEventListener("scroll", () => {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if(sectionTop < windowHeight - 100){
                    section.classList.add("show");
                }
            });
        });

        // trigger scroll on load to show sections in view
        window.dispatchEvent(new Event('scroll'));
    }

    /* ACTIVE NAV LINK HIGHLIGHT */
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if(link.getAttribute("href") === currentPage){
            link.classList.add("active");
        }
    });

    /* WELCOME MESSAGE */
    console.log("Welcome to Ryan Kipkoech's personal website!");
});


