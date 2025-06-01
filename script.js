const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme', !isDark);
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});
