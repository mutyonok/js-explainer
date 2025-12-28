document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prismLink = document.getElementById('prism-theme');
    const body = document.body;

    // Theme Configuration
    const THEMES = {
        DARK: 'dark',
        LIGHT: 'light'
    };

    const PRISM_THEMES = {
        [THEMES.DARK]: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css',
        [THEMES.LIGHT]: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-solarizedlight.min.css'
    };

    // Check Local Storage or System Preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let currentTheme = savedTheme || (systemPrefersDark ? THEMES.DARK : THEMES.LIGHT);

    // Initial Apply
    applyTheme(currentTheme);

    // Event Listener
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        applyTheme(newTheme);
    });

    function applyTheme(theme) {
        currentTheme = theme;

        // Update Body Class
        if (theme === THEMES.LIGHT) {
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
        }

        // Update Prism Theme
        if (prismLink && PRISM_THEMES[theme]) {
            prismLink.href = PRISM_THEMES[theme];
        }

        // Save Preference
        localStorage.setItem('theme', theme);

        // Update Aria Label just in case
        themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === THEMES.DARK ? 'light' : 'dark'} theme`);
    }
    // Initialize Explainers
    // Check if exampleConfig is defined (from data.js)
    if (typeof exampleConfig !== 'undefined') {
        exampleConfig.forEach(config => {
            if (document.getElementById(config.id)) {
                new Explainer(config.id, config);
            }
        });
    } else {
        console.error("exampleConfig not found. Make sure data.js is loaded.");
    }
});
