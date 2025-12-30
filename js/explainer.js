export class Explainer {
    constructor(rootElementId, config) {
        this.rootElement = document.getElementById(rootElementId);
        if (!this.rootElement) {
            console.error(`Root element not found: ${rootElementId}`);
            return;
        }

        this.config = config;
        this.stepIndex = -1; // -1 means "not started" or "reset"

        // Element references scoped to this instance
        this.preEl = this.rootElement.querySelector('pre');
        this.codeEl = this.preEl.querySelector('code');
        this.varsContainer = this.rootElement.querySelector('.variables-container');
        this.descEl = this.rootElement.querySelector('.description');
        this.nextBtn = this.rootElement.querySelector('.btn-next');
        this.resetBtn = this.rootElement.querySelector('.btn-reset');

        // Cache raw code and description
        this.originalCode = this.codeEl.textContent;
        this.originalDescription = this.descEl.innerHTML;

        // Bind events
        this.nextBtn.addEventListener('click', () => this.next());
        this.resetBtn.addEventListener('click', () => this.reset());

        // Initial render
        this.render();
    }

    reset() {
        this.stepIndex = -1;
        this.render();
        // Scroll to top of the card or description for better visibility
        this.descEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    next() {
        const lastStep = this.config.steps.length - 1;
        if (this.stepIndex < lastStep) {
            this.stepIndex++;
        } else {
            this.stepIndex = -1;
        }
        this.render();
    }

    render() {
        const step = this.stepIndex >= 0 ? this.config.steps[this.stepIndex] : null;

        const lastStep = this.config.steps.length - 1;

        // 1. Update Description & Button Text
        if (step) {
            this.descEl.innerHTML = step.description;
        } else {
            this.descEl.innerHTML = this.originalDescription;
        }

        // Update Button Text
        if (this.stepIndex === lastStep) {
            this.nextBtn.textContent = "Restart";
        } else {
            this.nextBtn.textContent = "Next Step";
        }

        // 2. Handle Highlights via Re-render
        let codeContent = this.escapeHtml(this.originalCode);

        // Inject Markup for Partial Highlight (Line-Aware)
        if (step && step.range && step.range.text && step.lines) {
            const textToHighlight = step.range.text; // raw text, don't escape yet
            const lines = codeContent.split('\n');

            // Step.lines format: "2" or "3-5" or "1,4" (Prism format)
            const targetLineNumbers = this.parseLineNumbers(step.lines);

            targetLineNumbers.forEach(lineNum => {
                const arrayIndex = lineNum - 1; // 1-based to 0-based
                if (lines[arrayIndex]) {
                    // Create adaptive Regex to avoid matching inside other words
                    const textToFindInEscaped = this.escapeHtml(textToHighlight);
                    const escapedPattern = this.escapeRegExp(textToFindInEscaped);

                    // Check if starts/ends with word character [a-zA-Z0-9_] using ORIGINAL text
                    const startsWithWord = /^\w/.test(textToHighlight);
                    const endsWithWord = /\w$/.test(textToHighlight);

                    const pattern = (startsWithWord ? '\\b' : '') + escapedPattern + (endsWithWord ? '\\b' : '');
                    const regex = new RegExp(pattern);

                    // Only replace the first occurrence on this line
                    lines[arrayIndex] = lines[arrayIndex].replace(
                        regex,
                        `<mark class="custom-highlight">${textToFindInEscaped}</mark>`
                    );
                }
            });

            codeContent = lines.join('\n');
        }

        // Update DOM
        this.codeEl.innerHTML = codeContent;

        // Cleanup Prism Line Highlights (DOM elements)
        this.preEl.querySelectorAll('.line-highlight').forEach(el => el.remove());

        // Apply Line Highlight Attribute
        if (step && step.lines) {
            this.preEl.setAttribute('data-line', step.lines);
        } else {
            this.preEl.removeAttribute('data-line');
        }

        // Trigger Prism
        // prism-keep-markup plugin (if loaded) will preserve our <mark> tags
        if (window.Prism) {
            Prism.highlightElement(this.codeEl);
        }

        // 3. Update Variables
        this.varsContainer.innerHTML = '';
        if (step && step.variables && Object.keys(step.variables).length > 0) {
            Object.entries(step.variables).forEach(([key, value]) => {
                const valueString = typeof value === 'object' ? JSON.stringify(value) : (typeof value === 'string' ? `"${value}"` : value);
                const div = document.createElement('div');
                div.className = 'variable-item';
                div.innerHTML = `<span class="var-name">${key}:</span> <span class="var-value">${valueString}</span>`;
                this.varsContainer.appendChild(div);
            });
        } else {
            this.varsContainer.innerHTML = '<div class="empty-state">No active variables</div>';
        }
    }

    parseLineNumbers(linesString) {
        if (!linesString) return [];
        // Handle "1" or "1,3" or "1-3"
        const result = [];
        const parts = linesString.split(',');
        parts.forEach(part => {
            if (part.includes('-')) {
                const [start, end] = part.split('-').map(Number);
                for (let i = start; i <= end; i++) result.push(i);
            } else {
                result.push(Number(part));
            }
        });
        return result;
    }

    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    escapeHtml(text) {
        if (!text) return text;
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}
