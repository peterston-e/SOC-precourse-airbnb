{
  const nav = document.querySelector(".footer_nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("footer_nav_hidden");
    } else {
      nav.classList.remove("footer_nav_hidden");
    }

    lastScrollY = window.scrollY;
  });
}
