// 1. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Dynamic Greeting based on time
const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();
let greetingText = "Welcome to ICT Revision";

if (hour < 12) {
    greetingText = "Good Morning! Ready to revise?";
} else if (hour < 18) {
    greetingText = "Good Afternoon! Keep up the progress.";
} else {
    greetingText = "Good Evening! Time for some study.";
}

// Only update if the element exists
if(greetingElement) {
    greetingElement.innerText = greetingText;
}

/* ACCORDION LOGIC FOR PAST PAPERS 
   This handles opening/closing the year cards
*/

// Select all headers inside year cards
const yearHeaders = document.querySelectorAll('.year-header');

yearHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Find the parent card (the .year-card div)
        const card = header.parentElement;
        
        // Toggle the 'active' class
        // This triggers the CSS we just added to show/hide the grid
        card.classList.toggle('active');
    });
});