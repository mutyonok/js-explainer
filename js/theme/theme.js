/**
 * Theme Management for JS Concept Explainer
 * Handles switching between light and dark themes and persists preference.
 */

export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
};

const PRISM_THEMES = {
    [THEMES.DARK]: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/themes/prism-tomorrow.min.css',
    [THEMES.LIGHT]: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.30.0/themes/prism-solarizedlight.min.css'
};

// Check Local Storage or System Preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let currentTheme = savedTheme || (systemPrefersDark ? THEMES.DARK : THEMES.LIGHT);

export function applyTheme(theme) {
    currentTheme = theme;
    const html = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prismLink = document.getElementById('prism-theme');

    if (theme === THEMES.LIGHT) {
        html.classList.add('light-theme');
    } else {
        html.classList.remove('light-theme');
    }

    if (prismLink && PRISM_THEMES[theme]) {
        prismLink.href = PRISM_THEMES[theme];
    }
    localStorage.setItem('theme', theme);
    if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === THEMES.DARK ? 'light' : 'dark'} theme`);
    }
}

export function getTheme() {
    return currentTheme;
}

export function init() {
    applyTheme(currentTheme);

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
            applyTheme(newTheme);
        });
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
