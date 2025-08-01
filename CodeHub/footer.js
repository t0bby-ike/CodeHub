class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container footer-container">
                <div class="footer-section">
                        <h3>Others</h3>
                        <ul class="footer-links">
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                            <li><a href="/about-us">About Us</a></li>
                        </ul>
                    </div>
                </div>
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

customElements.define('react-footer', FooterComponent);

// Insert the footer into the container
document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = '<react-footer></react-footer>';
    }
});