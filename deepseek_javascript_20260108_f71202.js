// Create floating hearts
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart heart';
        
        // Random position
        const leftPosition = Math.random() * 100;
        const size = Math.random() * 20 + 10; // Size between 10px and 30px
        const duration = Math.random() * 10 + 10; // Duration between 10s and 20s
        const delay = Math.random() * 5; // Random delay
        
        heart.style.left = `${leftPosition}vw`;
        heart.style.fontSize = `${size}px`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        
        // Random color variation
        const colors = ['#ff4081', '#ff1493', '#ff69b4', '#ffb6c1'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heart.style.color = randomColor;
        
        container.appendChild(heart);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', createFloatingHearts);

// Add click effect for hearts
document.querySelectorAll('.hearts i').forEach(heart => {
    heart.addEventListener('click', function() {
        this.style.transform = 'scale(1.8)';
        this.style.color = '#ff0000';
        
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            this.style.color = '#ff4081';
        }, 300);
    });
});

// Add hover effect for the message
const message = document.querySelector('.love-message');
message.addEventListener('mouseenter', function() {
    this.style.textShadow = '0 0 20px rgba(255, 20, 147, 0.8)';
});

message.addEventListener('mouseleave', function() {
    this.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.1)';
});