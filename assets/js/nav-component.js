// assets/js/nav-component.js

function loadNavbar(pathConfig) {
    let rootPath = './';
    let pagesPath = 'pages/';

    if (typeof pathConfig === 'boolean') {
        rootPath = pathConfig ? './' : '../';
        pagesPath = pathConfig ? 'pages/' : './';
    } else if (typeof pathConfig === 'string') {
        rootPath = pathConfig;
        pagesPath = `${pathConfig}pages/`;
    } else if (pathConfig && typeof pathConfig === 'object') {
        rootPath = pathConfig.basePath || './';
        pagesPath = pathConfig.pagesPath || `${rootPath}pages/`;
    }

    const navbarHTML = `
    <nav class="navbar">
        <a href="${rootPath}index.html" class="logo">
            HKDSE <strong>ICT</strong>
        </a>
        <ul class="nav-links">
            <li><a href="${pagesPath}past-papers.html">Past Papers (歷屆試題)</a></li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
    `;

    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;

        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        
        if (hamburger && navLinks) {
            hamburger.addEventListener("click", () => {
                // 1. Show the menu
                navLinks.classList.toggle("active");
                
                // 2. Animate the icon (Turn to X) - THIS WAS MISSING
                hamburger.classList.toggle("toggle");
            });
        }
    }
}