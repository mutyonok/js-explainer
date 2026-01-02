import { Explainer } from '../core/explainer.js';

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
        const scriptTag = this.querySelector('script[type="application/json"]');
        const steps = JSON.parse(scriptTag.textContent);
        this.explainer = new Explainer(this.id, { id: this.id, steps });
    }

    render() {
        // Get slotted content
        const title = this.querySelector('[slot="title"]').innerHTML;
        const description = this.querySelector('[slot="description"]').innerHTML;
        const code = this.querySelector('[slot="code"]').outerHTML;
        const summary = this.querySelector('[slot="summary"]').innerHTML;
        const scriptTag = this.querySelector('script[type="application/json"]');

        // NOTE: We don't set an ID on the article to avoid duplicate IDs
        // The Explainer class will use the code-explainer element itself as the root
        this.innerHTML = `
            <article class="example-card">
                <h2>${title}</h2>
                <p class="description">${description}</p>
                <div class="content-grid">
                    <div class="code-panel" aria-label="Code">
                        <figure class="code-figure">
                            ${code}
                        </figure>
                        <div class="step-description" aria-live="polite"></div>
                    </div>
                    <aside aria-label="Variables Inspector">
                        <section class="data-panel">
                            <h3>Variables</h3>
                            <dl class="variables-container">
                                <div class="empty-state">No active variables</div>
                            </dl>
                        </section>
                        <div class="controls">
                            <button class="btn-reset">Reset</button>
                            <button class="btn-next">Next Step</button>
                        </div>
                    </aside>
                </div>
                <p class="summary-section">${summary}</p>
            </article>
        `;

        // Re-append the script tag (preserve configuration)
        this.appendChild(scriptTag);

        // Trigger Prism highlighting
        Prism.highlightAllUnder(this);
    }
}

// Define the custom element
customElements.define('code-explainer', CodeExplainer);

export { CodeExplainer };
