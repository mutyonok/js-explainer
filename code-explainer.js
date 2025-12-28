/**
 * CodeExplainer Web Component
 * 
 * A custom element that encapsulates the boilerplate for code examples.
 * Uses slots for flexible content injection while maintaining compatibility
 * with Prism.js syntax highlighting and the existing Explainer class.
 */
class CodeExplainer extends HTMLElement {
    constructor() {
        super();
        // Use Light DOM instead of Shadow DOM for Prism.js compatibility
    }

    connectedCallback() {
        this.render();
        // Initialize Explainer after rendering is complete
        this.initializeExplainer();
    }

    /**
     * Initialize the Explainer instance for this component
     */
    initializeExplainer() {
        const steps = this.getSteps();
        this.createExplainer(steps);
    }

    /**
     * Create the Explainer instance
     * @param {Array} steps - Array of step configurations
     */
    createExplainer(steps) {
        if (steps && steps.length > 0) {
            this.explainer = new Explainer(this.id, { id: this.id, steps });
        } else {
            console.warn(`No configuration found for ${this.id}`);
        }
    }

    /**
     * Get the step configuration from the JSON script tag
     * @returns {Array|null} Array of step objects or null if not found
     */
    getSteps() {
        const scriptTag = this.querySelector('script[type="application/json"]');
        if (!scriptTag) {
            return null;
        }

        try {
            return JSON.parse(scriptTag.textContent);
        } catch (error) {
            console.error(`Error parsing JSON configuration for ${this.id}:`, error);
            return null;
        }
    }

    render() {
        // Get slotted content
        const titleSlot = this.querySelector('[slot="title"]');
        const descriptionSlot = this.querySelector('[slot="description"]');
        const codeSlot = this.querySelector('[slot="code"]');
        const scriptTag = this.querySelector('script[type="application/json"]');

        // Extract content from slots
        const title = titleSlot ? titleSlot.innerHTML : 'Example';
        const description = descriptionSlot ? descriptionSlot.innerHTML : '';
        const code = codeSlot ? codeSlot.outerHTML : '';

        // Build the HTML structure
        // NOTE: We don't set an ID on the article to avoid duplicate IDs
        // The Explainer class will use the code-explainer element itself as the root
        const html = `
            <article class="example-card">
                <h2>${title}</h2>
                ${description ? `<div class="description">${description}</div>` : ''}
                <div class="content-grid">
                    <figure class="code-panel">
                        ${code}
                    </figure>
                    <aside class="data-panel" aria-label="Variables Inspector">
                        <h3>Variables</h3>
                        <div class="variables-container">
                            <div class="empty-state">No active variables</div>
                        </div>
                    </aside>
                </div>
                <div class="controls">
                    <button class="btn-reset">Reset</button>
                    <button class="btn-next">Next Step</button>
                </div>
            </article>
        `;

        // Replace the component's content with the rendered HTML
        this.innerHTML = html;

        // Re-append the script tag if it exists (preserve configuration)
        if (scriptTag) {
            this.appendChild(scriptTag);
        }

        // Trigger Prism highlighting if available
        if (window.Prism) {
            window.Prism.highlightAllUnder(this);
        }
    }
}

// Define the custom element
customElements.define('code-explainer', CodeExplainer);
