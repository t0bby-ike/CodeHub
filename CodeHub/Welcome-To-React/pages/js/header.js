document.addEventListener('DOMContentLoaded', function() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    
    const headerHTML = `
        <header>
            <div class="container nav-container">
                <a href="index.html" class="logo">
                    <i class="fab fa-react"></i>
                    <span>Stryk's Code Hub</span>
                </a>
                <nav>
                    <ul class="nav-links">
                        <li><a href="../../index.html">Home</a></li>
                        <li class="dropdown">
                            <a href="#">Learn React <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="../obstacles-and-roadblocks/index.html">Obstacles and Roadblocks</a></li>
                                <li><a href="../react-is-a-library/index.html">React Is a Library</a></li>
                                <li><a href="../new-ecmascript-syntax/index.html">New ECMAScript Syntax</a></li>
                                <li><a href="../functional-javascript/index.html">Functional JavaScript</a></li>
                                <li><a href="../javascript-tooling-fatigue/index.html">Tooling Fatigue</a></li>
                                <li><a href="../why-react-is-easy/index.html">Why React Is Easy</a></li>
                                <li><a href="../react-future/index.html">React's Future</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">Resources <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="../react-developer-tools/index.html">Developer Tools</a></li>
                                <li><a href="../installing-nodejs/index.html">Installing Node.js</a></li>
                                <li><a href="../file-repository/index.html">File Repository</a></li>
                                <li><a href="../keeping-up-with-changes/index.html">Keeping Up with Changes</a></li>
                                <li><a href="../working-with-files/index.html">Working with Files</a></li>
                            </ul>
                        </li>
                        <li><a href="../about/index.html">About</a></li>
                        <li><a href="../contact-us/index.html">Contact</a></li>
                    </ul>
                </nav>
                <div class="hamburger">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </header>
    `;
    
    headerPlaceholder.innerHTML = headerHTML;
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Dropdown menu functionality for desktop
    function setupDesktopDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', function() {
                this.querySelector('.dropdown-menu').style.display = 'block';
            });
            
            dropdown.addEventListener('mouseleave', function() {
                this.querySelector('.dropdown-menu').style.display = 'none';
            });
        });
    }
    
    // Dropdown menu functionality for mobile
    function setupMobileDropdowns() {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    const icon = this.querySelector('i');
                    if (dropdown.classList.contains('active')) {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    } else {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    }
                }
            });
        });
    }
    
    // Check screen size and set up appropriate dropdown behavior
    function setupDropdowns() {
        if (window.innerWidth > 768) {
            // Desktop
            dropdowns.forEach(dropdown => {
                const menu = dropdown.querySelector('.dropdown-menu');
                menu.style.display = 'none';
            });
            setupDesktopDropdowns();
        } else {
            // Mobile
            setupMobileDropdowns();
        }
    }
    
    // Initial setup
    setupDropdowns();
    
    // Update on window resize
    window.addEventListener('resize', function() {
        setupDropdowns();
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && !this.parentElement.classList.contains('dropdown')) {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
});