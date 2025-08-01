document.addEventListener('DOMContentLoaded', function() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    const footerHTML = `
        <footer>
            <div class="container">
                <div class="footer-container">
                    <div class="footer-about">
                        <div class="footer-logo">Stryk's Codehub</div>
                        <p>The most comprehensive resource for learning React.js in 2025. From fundamentals to advanced patterns, we've got you covered.</p>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-github"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="footer-links">
                        <h3>React Mastery</h3>
                        <ul>
                            <li><a href="../obstacles-and-roadblocks/index.html">Obstacles and Roadblocks</a></li>
                            <li><a href="../react-is-a-library/index.html">React Is a Library</a></li>
                            <li><a href="../new-ecmascript-syntax/index.html">New ECMAScript Syntax</a></li>
                            <li><a href="../functional-javascript/index.html">Functional JavaScript</a></li>
                            <li><a href="../javascript-tooling-fatigue/index.html">Tooling Fatigue</a></li>
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="../react-developer-tools/index.html">Developer Tools</a></li>
                            <li><a href="../installing-nodejs/index.html">Installing Node.js</a></li>
                            <li><a href="../file-repository/index.html">File Repository</a></li>
                            <li><a href="../keeping-up-with-changes/index.html">Keeping Up</a></li>
                            <li><a href="../working-with-files/index.html">Working with Files</a></li>
                        </ul>
                    </div>
                    <div class="footer-links">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="../about/index.html">About Us</a></li>
                            <li><a href="../contact-us/index.html">Contact</a></li>
                            <li><a href="../privacy-policy/index.html">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy; ${new Date().getFullYear()} Stryk's Codehub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
    
    footerPlaceholder.innerHTML = footerHTML;
});