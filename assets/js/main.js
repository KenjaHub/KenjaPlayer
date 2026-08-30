/* KenjaPlayer site — no frameworks, no tracking */

// enable scroll-reveal only when JS runs (crawlers always see full content)
document.documentElement.classList.add("js");

// ── App Store link: change this ONE constant after the app goes live ──
const APP_STORE_URL = "https://apps.apple.com/app/id6792728329";

document.querySelectorAll("[data-store]").forEach((a) => {
  a.href = APP_STORE_URL;
});

// sticky header hairline
const head = document.querySelector(".site-head");
if (head) {
  const onScroll = () => head.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// mobile menu
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => mobileNav.classList.toggle("is-open"));
  mobileNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => mobileNav.classList.remove("is-open"))
  );
}

// scroll-reveal
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".rv").forEach((el) => io.observe(el));

// footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
