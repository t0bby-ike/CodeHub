document.addEventListener('DOMContentLoaded', function() {
    // Add copy functionality to all code blocks
    document.querySelectorAll('.code-panel').forEach(panel => {
        const copyBtn = panel.querySelector('.copy-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', function() {
                const codeContent = panel.querySelector('.code-content code');
                
                if (codeContent) {
                    const code = codeContent.innerText;
                    navigator.clipboard.writeText(code).then(() => {
                        // Visual feedback
                        const originalText = this.innerHTML;
                        this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                        this.style.backgroundColor = '#28a745';
                        
                        setTimeout(() => {
                            this.innerHTML = originalText;
                            this.style.backgroundColor = '#3a3f4b';
                        }, 2000);
                    }).catch(err => {
                        console.error('Failed to copy code: ', err);
                        this.innerHTML = '<i class="fas fa-times"></i> Error';
                        this.style.backgroundColor = '#dc3545';
                        
                        setTimeout(() => {
                            this.innerHTML = originalText;
                            this.style.backgroundColor = '#3a3f4b';
                        }, 2000);
                    });
                }
            });
        }
    });
    
    // Add line numbers to all code blocks
    document.querySelectorAll('.code-panel').forEach(panel => {
        const codeContent = panel.querySelector('.code-content pre code');
        if (!codeContent) return;
        
        const code = codeContent.innerText;
        const lines = code.split('\n').length;
        
        // Create line numbers container
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'line-numbers';
        
        // Add line numbers
        for (let i = 1; i <= lines; i++) {
            const lineNumber = document.createElement('div');
            lineNumber.className = 'line-number';
            lineNumber.textContent = i;
            lineNumbers.appendChild(lineNumber);
        }
        
        // Create container for line numbers and code
        const container = document.createElement('div');
        container.className = 'code-container';
        container.appendChild(lineNumbers);
        
        // Wrap code content in a div if not already
        const codeWrapper = document.createElement('div');
        codeWrapper.className = 'code-content';
        codeWrapper.appendChild(codeContent.parentElement);
        
        container.appendChild(codeWrapper);
        
        // Replace original pre with our new structure
        const pre = panel.querySelector('pre');
        if (pre) {
            panel.insertBefore(container, pre);
            pre.remove();
        }
    });
});