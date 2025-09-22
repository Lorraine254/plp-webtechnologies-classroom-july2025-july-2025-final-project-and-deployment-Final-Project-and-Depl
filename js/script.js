// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('#nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}
// Smooth scroll to recipes section
document.getElementById("exploreBtn").addEventListener("click", function () {
  document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
});


// ===== Smooth Scroll =====
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Form Validation =====
const form = document.querySelector('#contact-form');
const errorDiv = document.querySelector('#formError');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    let errors = [];

    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";
    errorDiv.style.color = "red";

    if (name.length < 2) errors.push("Please enter a valid name.");
    if (!/\S+@\S+\.\S+/.test(email)) errors.push("Please enter a valid email.");
    if (message.length < 10) errors.push("Message should be at least 10 characters.");

    if (errors.length > 0) {
      errorDiv.style.display = "block";
      errorDiv.innerHTML = errors.join("<br>");
    } else {
      errorDiv.style.display = "block";
      errorDiv.style.color = "green";
      errorDiv.innerHTML = "Thank you! Your message has been sent successfully.";
      form.reset();
    }
  });
}
