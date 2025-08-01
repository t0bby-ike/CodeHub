// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Load header and footer
    loadHeader();
    loadFooter();
});

function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header>
                <div class="container nav-container">
                    <a href="/" class="logo">React</a>
                    <button class="hamburger">☰</button>
                    <ul class="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/obstacles-and-roadblocks">Obstacles</a></li>
                        <li><a href="/react-is-a-library">React as Library</a></li>
                        <li><a href="/new-ecmascript-syntax">ECMAScript</a></li>
                        <li><a href="/functional-javascript">Functional JS</a></li>
                        <li><a href="/javascript-tooling-fatigue">Tooling</a></li>
                    </ul>
                </div>
            </header>
        `;
    }
}

function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer>
                <div class="container footer-container">
                    <div class="footer-section">
                        <h3>React Basics</h3>
                        <ul class="footer-links">
                            <li><a href="/obstacles-and-roadblocks">Obstacles and Roadblocks</a></li>
                            <li><a href="/react-is-a-library">React Is a Library</a></li>
                            <li><a href="/new-ecmascript-syntax">New ECMAScript Syntax</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>JavaScript Concepts</h3>
                        <ul class="footer-links">
                            <li><a href="/functional-javascript">Functional JavaScript</a></li>
                            <li><a href="/javascript-tooling-fatigue">Tooling Fatigue</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Learning React</h3>
                        <ul class="footer-links">
                            <li><a href="/why-react-easy">Why React Is Easy</a></li>
                            <li><a href="/react-future">React's Future</a></li>
                            <li><a href="/keeping-up">Keeping Up</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Resources</h3>
                        <ul class="footer-links">
                            <li><a href="/working-with-files">Working with Files</a></li>
                            <li><a href="/file-repository">File Repository</a></li>
                            <li><a href="/react-developer-tools">Developer Tools</a></li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy; ${new Date().getFullYear()} Welcome to React. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}