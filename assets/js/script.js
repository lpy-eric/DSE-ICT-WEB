/* NOTE: Hamburger menu logic is in 'nav-component.js' */

/* UPDATED TOPIC CARD INTERACTION - LINKS TO NEW PAGES */
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.topic-card');
    
    // Map card (tag + title) to filenames
    const pageMap = {
        "Compulsory A1|Information Processing": "pages/topics/compulsory-a1-information-processing.html",
        "Compulsory A2|Information Processing": "pages/topics/compulsory-a2-information-processing.html",
        "Compulsory B|Computer System Fundamentals": "pages/topics/compulsory-b-computer-system-fundamentals.html",
        "Compulsory C1|Internet & its Applications": "pages/topics/compulsory-c1-internet-applications.html",
        "Compulsory C2|Internet & its Applications": "pages/topics/compulsory-c2-internet-applications.html",
        "Compulsory D1|Computational Thinking & Programming": "pages/topics/compulsory-d1-computational-thinking-programming.html",
        "Compulsory D2|Computational Thinking & Programming": "pages/topics/compulsory-d2-computational-thinking-programming.html",
        "Compulsory E|Social Implications": "pages/topics/compulsory-e-social-implications.html",
        "Elective A|Databases": "pages/topics/elective-a-databases.html",
        "Elective B|Web Application Development": "pages/topics/elective-b-web-application-development.html",
        "Elective C|Algorithm & Programming": "pages/topics/elective-c-algorithm-programming.html"
    };

    // 1. Run Text Resizing Logic - DISABLED to ensure consistent font size check
    /*
    if (window.innerWidth >= 768) {
         // Using the helper from ui-components.js
         if (typeof fitTextToContainer === 'function') {
             fitTextToContainer('.topic-card h3');
         }
    }
    */
    
    // Add resize listener to re-calculate on window resize
    /*
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            if (typeof fitTextToContainer === 'function') {
                fitTextToContainer('.topic-card h3');
            }
        } else {
             // Reset on mobile if needed, or leave as is. 
             // Mobile layout is vertical stack so usually plenty of width, 
             // or standard wrapping is preferred? User asked for "Computer Layout".
             // We can clear inline styles to let CSS take over on mobile.
             document.querySelectorAll('.topic-card h3').forEach(el => el.style.fontSize = '');
        }
    });
    */

    cards.forEach(card => {
        card.style.cursor = "pointer"; // Make it look clickable
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').innerText;
            const tag = this.querySelector('.topic-tag')?.innerText || '';
            const pageKey = `${tag}|${title}`;
            const targetPage = pageMap[pageKey];
            
            if (targetPage) {
                window.location.href = targetPage;
            } else {
                alert("Page under construction!");
            }
        });
    });
});
