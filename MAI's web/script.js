/* =========================
   基本互動 & 小動畫
   ========================= */

// footer 年份自動更新
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 手機版：點選導覽後自動收合選單
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelectorAll(".nav__links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navToggle) navToggle.checked = false;
  });
});

/* =========================
   Scroll Reveal（簡易）
   ========================= */

const revealElements = document.querySelectorAll(
  ".card, .skill, .strip__text, .strip__box"
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => revealObserver.observe(el));

/* =========================
   Parallax 強化（選用）
   桌機滑動背景微移
   ========================= */

const parallaxSections = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  parallaxSections.forEach(section => {
    section.style.backgroundPositionY = `${scrollY * 0.35}px`;
  });
});
