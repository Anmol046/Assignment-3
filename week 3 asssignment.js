document.addEventListener("DOMContentLoaded", () => {
    // Load the theme from localStorage
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);

    // Load the user name from localStorage or URL
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('user_name') || localStorage.getItem('user_name') || 'User';
    document.getElementById('main-heading').innerText = `Hello, ${userName}!`;
    
    // Toggle theme function
    document.getElementById('toggle-theme').addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Update image and text when button is clicked
    document.getElementById('buttons-container').addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const imageUrl = event.target.getAttribute('data-image');
            const imageText = event.target.getAttribute('data-text');
            document.getElementById('bird-image').src = imageUrl;
            document.getElementById('image-description').innerText = imageText;
        }
    });

    // Update user name when form is submitted
    document.getElementById('submit-name').addEventListener('click', () => {
        const userName = document.getElementById('user-name').value;
        if (userName) {
            localStorage.setItem('user_name', userName);
            window.location.search = `?user_name=${encodeURIComponent(userName)}`;
        }
    });
});
