const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☾";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☾";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "☀︎";
  }
});

const fadeElements = document.querySelectorAll("#fade-text, #tagline");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    } else {
      entry.target.classList.remove("fade-in");
    }
  });
}, { threshold: 0.5 });

fadeElements.forEach(el => observer.observe(el));
