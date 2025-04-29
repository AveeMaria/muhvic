document.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('[href^="#"]');
    
    anchorLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
          
        if (targetElement) {
                targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
  });
});