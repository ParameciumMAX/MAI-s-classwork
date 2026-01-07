// 年份
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ✅ 防呆檢查：GSAP 有沒有載到
console.log("gsap:", window.gsap);
console.log("ScrollTrigger:", window.ScrollTrigger);

if (!window.gsap || !window.ScrollTrigger) {
  console.error("❌ GSAP 或 ScrollTrigger 沒載入：請檢查 index.html CDN 與 script 順序");
} else {
  gsap.registerPlugin(ScrollTrigger);

  // ✅ 防呆檢查：元素有沒有抓到
  const hero = document.querySelector(".hero");
  const bg = document.querySelector(".hero__bg");
  const glow = document.querySelector(".hero__glow");
  console.log("hero:", hero, "bg:", bg, "glow:", glow);

  if (!hero || !bg || !glow) {
    console.error("❌ 找不到 .hero / .hero__bg / .hero__glow：請檢查 HTML class 名稱是否一致");
  } else {
    gsap.to(".hero__bg", {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".hero__glow", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // 卡片/表格淡入
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el, { autoAlpha: 0, y: 24 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true
        }
      });
    });

    ScrollTrigger.refresh();
    console.log("✅ ScrollTrigger 已初始化");
  }
}
