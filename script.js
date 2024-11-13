// JavaScript file: script.js

// Password Toggle Functionality
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    // Toggle the type attribute
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle the eye icon
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// Form Validation
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const loginButton = document.getElementById('loginButton');

loginForm.addEventListener('submit', (event) => {
    // Prevent form submission
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        alert('Please fill in both username and password.');
    } else {
        // Proceed with login logic
        alert(`Welcome, ${username}!`);
        // In a real app, you'd handle login here (e.g., send to server)
    }
});
