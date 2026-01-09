(function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
        const prismLink = document.getElementById('prism-theme');
        if (prismLink) {
            prismLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/themes/prism-solarizedlight.min.css';
        }
    }
})();

