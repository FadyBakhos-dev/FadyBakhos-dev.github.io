// Smooth scroll for nav links (CSS already handles this, but this adds
// an offset fallback and active-link highlighting)

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  // Highlight the nav link of the section currently in view
  const setActiveLink = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  // Slight header shadow once the page has scrolled
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", () => {
    nav.style.borderBottomColor = window.scrollY > 10 ? "var(--accent-dim)" : "var(--border)";
  });
});
