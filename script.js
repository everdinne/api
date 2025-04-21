// 當頁面加載完成時觸發動畫
window.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  setTimeout(() => {
    main.classList.add('visible');
  }, 300); // 延遲一點點讓動畫更柔和
});
