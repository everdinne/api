// 🌠 GSAP 動畫設定
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', () => {
  gsap.from("#hero-content > *", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0.3
  });

  gsap.utils.toArray('.fade-in').forEach((el, i) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.05 * i
    });
  });

  // CTA glow 效果
  gsap.utils.toArray('.glow-hover').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        boxShadow: '0 0 20px 4px rgba(255, 64, 160, 0.4)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        boxShadow: '0 0 0px 0px rgba(0, 0, 0, 0)',
        duration: 0.4,
        ease: 'power2.inOut'
      });
    });
  });

  // 圖片 hover glow
  document.querySelectorAll("img.hover-glow").forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("mouseenter", () => {
      img.style.boxShadow = "0 0 25px rgba(255, 128, 255, 0.25)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.boxShadow = "none";
    });
  });
});

// 🌓 主題切換（桌面 + 手機）
const root = document.documentElement;
const themeIcon = document.getElementById("themeIcon");
const mobileThemeIcon = document.getElementById("mobileThemeIcon");
const themeToggle = document.getElementById("themeToggle");
const mobileThemeToggle = document.getElementById("mobileThemeToggle");

function setTheme(mode) {
  root.classList.toggle('dark', mode === 'dark');
  if (themeIcon) themeIcon.textContent = mode === 'dark' ? '🌞' : '🌙';
  if (mobileThemeIcon) mobileThemeIcon.textContent = mode === 'dark' ? '🌞' : '🌙';
  localStorage.setItem('theme', mode);
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle?.addEventListener('click', () => {
  const newTheme = root.classList.contains('dark') ? 'light' : 'dark';
  document.body.classList.add('transition-colors');
  setTheme(newTheme);
});

mobileThemeToggle?.addEventListener('click', () => {
  const newTheme = root.classList.contains('dark') ? 'light' : 'dark';
  setTheme(newTheme);
});

// 📱 漢堡選單切換
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

// 🔳 modal 自動關閉邏輯
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', e => {
    const rect = dialog.getBoundingClientRect();
    if (
      e.clientX < rect.left || e.clientX > rect.right ||
      e.clientY < rect.top || e.clientY > rect.bottom
    ) dialog.close();
  });
  dialog.addEventListener('keydown', e => {
    if (e.key === 'Escape') dialog.close();
  });
});
