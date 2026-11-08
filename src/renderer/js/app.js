const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

document.getElementById('platform').textContent =
    `Running on: ${window.hassanOS.platform}`;