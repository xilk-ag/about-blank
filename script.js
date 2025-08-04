// Discord Bot Authorization Function
function addToDiscord() {
    // Discord OAuth2 authorization URL
    const discordAuthUrl = 'https://discord.com/api/oauth2/authorize?client_id=1401784369881940081&permissions=2048&scope=bot';
    
    // Add button click animation
    const button = document.querySelector('.discord-button');
    button.style.transform = 'scale(0.95)';
    
    // Reset button animation after 150ms
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
    
    // Redirect to Discord authorization
    setTimeout(() => {
        window.open(discordAuthUrl, '_blank');
    }, 200);
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add parallax effect to stars on mouse move
    document.addEventListener('mousemove', function(e) {
        const stars = document.querySelectorAll('.stars, .stars2, .stars3');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        stars.forEach((star, index) => {
            const speed = (index + 1) * 0.5;
            star.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
    
    // Add typing effect to bot name
    const botName = document.querySelector('.bot-name');
    const originalText = botName.textContent;
    botName.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            botName.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
    
    // Add hover effect to bot logo
    const botLogo = document.querySelector('.bot-logo');
    botLogo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(5deg)';
    });
    
    botLogo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add smooth scrolling and prevent default on anchor clicks
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
    }
}); 