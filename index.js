document.addEventListener('DOMContentLoaded', () => {
    if (typeof exampleConfig !== 'undefined') {
        exampleConfig.forEach(config => {
            if (document.getElementById(config.id)) {
                new Explainer(config.id, config);
            }
        });
    } else {
        console.error("exampleConfig not found. Make sure examples data is loaded.");
    }
});
