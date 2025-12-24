// assets/js/countdown-component.js

function loadCountdown() {
    // 1. Define the HTML Structure
    // ADDED: The .scroll-indicator div inside the wrapper
    const countdownHTML = `
    <div class="hero-container">
        <div class="countdown-wrapper">
            <div class="countdown-header">
                <span class="sub-text">Countdown to 2026 DSE</span>
                <h1 class="main-title">ICT</h1>
                <span class="status-text">Time Remaining</span>
            </div>

            <div id="countdown" class="timer-grid">
                <div class="time-box">
                    <span id="days" class="time-number">000</span>
                    <span class="time-label">Days</span>
                </div>
                <div class="time-box">
                    <span id="hours" class="time-number">00</span>
                    <span class="time-label">Hours</span>
                </div>
                <div class="time-box">
                    <span id="minutes" class="time-number">00</span>
                    <span class="time-label">Mins</span>
                </div>
                <div class="time-box">
                    <span id="seconds" class="time-number">00</span>
                    <span class="time-label">Secs</span>
                </div>
            </div>

            <div class="date-badge">
                Exam Date: April 24, 2026
            </div>
        </div>

        <div class="scroll-indicator" id="countdown-scroll-btn">
            <span>Click</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
            </svg>
        </div>
    </div>
    `;

    // 2. Inject HTML
    const placeholder = document.getElementById('hero-placeholder');
    if (!placeholder) return;
    placeholder.innerHTML = countdownHTML;

    // 3. Start Timer Logic (Target: April 24, 2026)
    const examDate = new Date("April 24, 2026 08:30:00").getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = examDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const d = document.getElementById("days");
        const h = document.getElementById("hours");
        const m = document.getElementById("minutes");
        const s = document.getElementById("seconds");

        if (d && h && m && s) {
            d.innerHTML = days < 10 ? "0" + days : days;
            h.innerHTML = hours < 10 ? "0" + hours : hours;
            m.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            s.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        }

        if (distance < 0) {
            const wrapper = document.querySelector(".countdown-wrapper");
            if(wrapper) wrapper.innerHTML = "<h1>EXAM STARTED</h1>";
        }
    };

    updateTimer();
    setInterval(updateTimer, 1000);

    // 4. ADDED: Scroll Logic for the new button
    const scrollBtn = document.getElementById('countdown-scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            // Targeting the specific ID "topics" found in your index.html
            const studyModule = document.getElementById('topics'); 
            
            if (studyModule) {
                studyModule.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn("Element with ID 'topics' not found.");
            }
        });
    }
}