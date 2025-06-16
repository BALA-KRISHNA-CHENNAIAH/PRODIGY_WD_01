window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const body = document.body;
  const navbar = document.getElementById("navbar");

  if (scrollY > 150) {
    body.style.backgroundColor = "lightgreen"; // Light blue when scrolled
    navbar.classList.add("scrolled");
  } else {
    body.style.backgroundColor = "white"; // Default background
    navbar.classList.remove("scrolled");
  }
});
