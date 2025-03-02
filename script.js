document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded, searching for button...');
    const body = document.body;
    const toggleButton = document.getElementById('darkmode-toggle-btn');

    if (!toggleButton) {
        //console.error('Dark mode toggle button not found!');
        return;
    }

    console.log('Button found, setting up toggle...');

    // Apply dark mode if previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        console.log('Applying saved dark mode');
        body.classList.add('dark-mode');
    }

    // Add event listener
    toggleButton.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Button clicked, toggling dark mode');
        body.classList.toggle('dark-mode');

        // Save preference
        if (body.classList.contains('dark-mode')) {
            console.log('Dark mode enabled, saving to localStorage');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            console.log('Dark mode disabled, removing from localStorage');
            localStorage.removeItem('darkMode');
        }
    });

    console.log('Event listener attached to button');
});