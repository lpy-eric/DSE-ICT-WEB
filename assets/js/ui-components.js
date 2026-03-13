// assets/js/ui-components.js

/**
 * Generates the HTML string for the scroll indicator.
 * @param {string} id - The unique ID for the scroll button element.
 * @returns {string} HTML string for the indicator.
 */
function getScrollIndicatorHTML(id) {
    return `
        <div class="scroll-indicator" id="${id}">
            <span>Click</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
            </svg>
        </div>
    `;
}

/**
 * Attaches the click event listener to the scroll indicator.
 * @param {string} buttonId - The ID of the scroll button.
 * @param {string} targetId - The ID of the element to scroll to.
 */
function attachScrollLogic(buttonId, targetId) {
    const scrollBtn = document.getElementById(buttonId);
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Fallback if specific target not found
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
        });
    }
}

/**
 * Resizes text within elements to ensure they fit within their container on one line.
 * @param {string} selector - CSS selector for the elements to resize.
 */
function fitTextToContainer(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
        // Reset to default to measure 'natural' overflow
        el.style.fontSize = ''; 
        
        let fontSize = parseFloat(window.getComputedStyle(el).fontSize);
        const minSize = 12; // Don't go below 12px
        
        // While the text content is wider than the container...
        // Note: scrollWidth is the full width of content, clientWidth is the visible width
        while (el.scrollWidth > el.clientWidth && fontSize > minSize) {
            fontSize -= 0.5; // Decrement by 0.5px
            el.style.fontSize = `${fontSize}px`;
        }
    });
}

/**
 * Loads Husky component and binds smooth scroll-to-top behavior.
 * @param {string} basePath - Path from current page to project root.
 */
function loadHuskyComponent(basePath = '') {
    const normalizedBasePath = basePath && !basePath.endsWith('/') ? `${basePath}/` : basePath;

    fetch(`${normalizedBasePath}components/husky-dog/husky-dog.html`)
        .then(response => {
            if (!response.ok) throw new Error('Husky HTML not found');
            return response.text();
        })
        .then(huskyHtml => {
            let container = document.getElementById('husky-component-container');
            if (!container) {
                container = document.createElement('div');
                container.id = 'husky-component-container';
                document.body.appendChild(container);
            }

            container.innerHTML = `
                <button type="button" class="husky-scroll-top" aria-label="Back to top">
                    ${huskyHtml}
                    <span class="husky-scroll-top__hint">Click Husky · Back to Top</span>
                </button>
            `;

            const huskyButton = container.querySelector('.husky-scroll-top');
            if (huskyButton) {
                huskyButton.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        })
        .catch(error => console.error('Error loading husky:', error));
}
