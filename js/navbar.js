document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-menu li a").forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});

