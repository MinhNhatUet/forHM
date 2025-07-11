/**
 * SOLAR SYSTEM FLOWER GALLERY
 * Simple, Clean JavaScript
 */


// Create animated stars
function createStars() {
    const starfield = document.querySelector('.starfield');
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: white;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
        `;
        starfield.appendChild(star);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Planet and sun keyboard accessibility
    document.querySelectorAll('.planet').forEach(planet => {
        planet.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        planet.setAttribute('tabindex', '0');
    });
    const sun = document.querySelector('.sun');
    if (sun) {
        sun.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        sun.setAttribute('tabindex', '0');
    }
    // Close modal on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMessage();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createStars();
    setupEventListeners();
    console.log('🌟 Solar System loaded successfully!');

    // Debug tool - adds a button to show element stacking (only on index.html)
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const debugBtn = document.createElement('button');
        debugBtn.textContent = 'Kiểm tra z-index';
        debugBtn.style.position = 'fixed';
        debugBtn.style.bottom = '10px';
        debugBtn.style.right = '10px';
        debugBtn.style.padding = '5px 10px';
        debugBtn.style.background = '#333';
        debugBtn.style.color = 'white';
        debugBtn.style.border = 'none';
        debugBtn.style.borderRadius = '5px';
        debugBtn.style.cursor = 'pointer';
        debugBtn.style.zIndex = '9999';
        debugBtn.onclick = function() {
            const planetElements = document.querySelectorAll('.planet');
            const sun = document.querySelector('.sun');
            const orbits = document.querySelectorAll('.orbit');
            let report = 'Z-INDEX REPORT:\n';
            if (sun) report += `Sun: ${window.getComputedStyle(sun).zIndex}\n`;
            if (orbits.length > 0) report += `Orbits: ${window.getComputedStyle(orbits[0]).zIndex}\n`;
            report += 'Planets:\n';
            planetElements.forEach((planet, i) => {
                report += `- Planet ${i+1}: ${window.getComputedStyle(planet).zIndex} (pointer-events: ${window.getComputedStyle(planet).pointerEvents})\n`;
            });
            alert(report);
        };
        document.body.appendChild(debugBtn);
    }
});

// Static modal close function for index.html
function closeMessage() {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modalContainer');
    if (overlay) overlay.classList.remove('active');
    if (modal) modal.classList.remove('active');

    // Optional: Clear nội dung modal
    const messagesContainer = document.getElementById('modalMessages');
    if (messagesContainer) messagesContainer.innerHTML = '';
}
window.closeMessage = closeMessage;

// Error handling
window.addEventListener('error', function(e) {
    console.error('Error in Solar System:', e.error);
});

// Performance monitoring
if (window.performance) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`⚡ Page loaded in ${Math.round(perfData.loadEventEnd)}ms`);
        }, 0);
    });
}