
// Navbar
let mobileNavbar = document.querySelector("#mobile-navbar");
let closeMobileNavbarBtn = document.querySelector(".close-navbar");
let openMobileNavbarBtn = document.querySelector(".open-navbar");

let mobileNavLinks = document.querySelectorAll(".nav-link");

for ( i =0; i < mobileNavLinks.length; i++){
  mobileNavLinks[i].addEventListener('click', function() {
    hideMobileNavbar();
  });
}

let showMobileNavbar = () => {
  mobileNavbar.classList.remove("hidden");
};

let hideMobileNavbar = () => {
  mobileNavbar.classList.add("hidden");
};

closeMobileNavbarBtn.addEventListener("click", hideMobileNavbar);
openMobileNavbarBtn.addEventListener("click", showMobileNavbar);