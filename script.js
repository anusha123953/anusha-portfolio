// MOBILE NAVIGATION

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// FOOTER YEAR

const footer = document.querySelector("footer");

footer.innerHTML = `
    <p>© ${new Date().getFullYear()} Anusha Shetty. Built with passion and consistency.</p>
    <p class="footer-text">Keep Learning. Keep Building. Keep Growing. 🚀</p>
`;