class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
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
                        <li><a href="/why-react-easy">Why Easy</a></li>
                        <li><a href="/react-future">Future</a></li>
                        <li><a href="/keeping-up">Keeping Up</a></li>
                        <li><a href="/working-with-files">Files</a></li>
                        <li><a href="/file-repository">Repository</a></li>
                        <li><a href="/react-developer-tools">Dev Tools</a></li>
                    </ul>
                </div>
            </header>
        `;
        
        // Add mobile menu toggle functionality
        const hamburger = this.querySelector('.hamburger');
        const navLinks = this.querySelector('.nav-links');
        
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        }
    }
}

customElements.define('react-header', HeaderComponent);

// Insert the header into the container
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = '<react-header></react-header>';
    }
});