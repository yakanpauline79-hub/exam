const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); 
//     alert('Message envoyé ! (Simulation)');
   
// });
// 2. Smooth scroll
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// 3. Validation formulaire
const form = document.getElementById("contact-form"); // après correction HTML
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector("textarea").value;

  if (name.length < 2) {
    alert("Nom trop court (min 2 caractères)");
    return;
  }

  if (!email.includes("@")) {
    alert("Email invalide");
    return;
  }

  if (message.length < 10) {
    alert("Message trop court (min 10 caractères)");
    return;
  }

  alert("Message envoyé avec succès!");
  this.reset();
});