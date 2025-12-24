/* NOTE: Hamburger menu logic is in 'nav-component.js' */

/* ACCORDION LOGIC FOR PAST PAPERS (Keep your existing code) */
const yearHeaders = document.querySelectorAll('.year-header');
yearHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('active');
    });
});

/* UPDATED TOPIC CARD INTERACTION - LINKS TO NEW PAGES */
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.topic-card');
    
    // Map card titles to filenames
    const pageMap = {
        "💾 Information Processing": "pages/information-processing.html",
        "💻 Computer Systems": "pages/computer-systems.html",
        "🌐 Internet & Apps": "pages/internet-apps.html",
        "⌨️ Computational Thinking": "pages/computational-thinking.html"
    };

    cards.forEach(card => {
        card.style.cursor = "pointer"; // Make it look clickable
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').innerText;
            const targetPage = pageMap[title];
            
            if (targetPage) {
                window.location.href = targetPage;
            } else {
                alert("Page under construction!");
            }
        });
    });
});
