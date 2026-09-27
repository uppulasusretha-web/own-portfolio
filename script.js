console.log("Portfolio website loaded successfully");

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}

function downloadResume() {
    alert("Resume download will be available soon.");
}

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been submitted.");

    event.target.reset();
}

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation clicked");

    });

});