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
    }

    render() {
        // Get slotted content
        const titleSlot = this.querySelector('[slot="title"]');
        const descriptionSlot = this.querySelector('[slot="description"]');
        const codeSlot = this.querySelector('[slot="code"]');

        // Extract content from slots
        const title = titleSlot ? titleSlot.innerHTML : 'Example';
        const description = descriptionSlot ? descriptionSlot.innerHTML : '';
        const code = codeSlot ? codeSlot.outerHTML : '';

        // Get the ID from the component itself
        const exampleId = this.id || 'example';

        // Build the HTML structure
        const html = `
            <article class="example-card" id="${exampleId}">
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

        // Trigger Prism highlighting if available
        if (window.Prism) {
            window.Prism.highlightAllUnder(this);
        }
    }
}

// Define the custom element
customElements.define('code-explainer', CodeExplainer);
