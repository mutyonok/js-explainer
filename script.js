document.addEventListener('DOMContentLoaded', () => {
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
