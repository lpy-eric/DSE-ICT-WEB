// assets/js/hero-component.js

function loadHero(line1, line2) {
    // Defines the HTML structure (The Aurora Style)
    // ADDED: The .scroll-indicator div and SVG arrow inside the container
    const heroHTML = `
    <div class="hero-container">
        <h1 class="hero-aurora">
            ${line1}<br>
            <span class="highlight">${line2}</span>
        </h1>
        
        <div class="scroll-indicator" id="hero-scroll-btn">
            <span>Click</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
            </svg>
        </div>
    </div>
    `;

    // Inject into the placeholder
    const placeholder = document.getElementById('hero-placeholder');
    if (placeholder) {
        placeholder.innerHTML = heroHTML;

        // ADDED: Logic to handle the click event
        const scrollBtn = document.getElementById('hero-scroll-btn');
        if (scrollBtn) {
            scrollBtn.addEventListener('click', () => {
                // Try to find the specific main content area
                const mainContent = document.getElementById('main-content');
                
                if (mainContent) {
                    // Smooth scroll to the content
                    mainContent.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // Fallback: If ID not found, just scroll down one viewport height
                    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                }
            });
        }
    }
}