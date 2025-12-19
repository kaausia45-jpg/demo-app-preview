// --- Splash Screen Logic ---
if (document.body.classList.contains('splash-bg')) {
    setTimeout(() => {
        window.location.href = '02_intro.html';
    }, 1000); // 기획안대로 하려면 2000 -> 1000으로 변경
}

// --- AI Overlay Logic ---
const aiButton = document.getElementById('ai-button');
const aiOverlay = document.getElementById('ai-overlay');
const closeAiOverlay = document.getElementById('close-ai-overlay');

if (aiButton && aiOverlay && closeAiOverlay) {
    aiButton.addEventListener('click', () => {
        aiOverlay.classList.remove('hidden');
    });

    closeAiOverlay.addEventListener('click', () => {
        aiOverlay.classList.add('hidden');
    });
    
    // Close if clicking on the background
    aiOverlay.addEventListener('click', (e) => {
        if (e.target === aiOverlay) {
             aiOverlay.classList.add('hidden');
        }
    });
}

// --- Swipe Navigation Logic for Home Screens ---
const swipeContainer = document.getElementById('swipe-container');
if (swipeContainer) {
    let touchstartX = 0;
    let touchendX = 0;

    const currentPath = window.location.pathname.split('/').pop();

    function handleSwipe() {
        if (touchendX < touchstartX - 50) { // Swiped left
            if (currentPath === '04_home_base.html') {
                window.location.href = '15_home_schedule.html';
            } else if (currentPath === '07_home_category.html') {
                window.location.href = '04_home_base.html';
            }
        }
        if (touchendX > touchstartX + 50) { // Swiped right
            if (currentPath === '04_home_base.html') {
                window.location.href = '07_home_category.html';
            } else if (currentPath === '15_home_schedule.html') {
                window.location.href = '04_home_base.html';
            }
        }
    }

    swipeContainer.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    swipeContainer.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}