document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const authModal = document.getElementById('authModal');
    const authLinks = document.getElementById('authLinks');
    const userMenu = document.getElementById('userMenu');
    const bookingSection = document.getElementById('bookingSection');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    let isLoggedIn = false;

    // Open the modal for login
    document.getElementById('loginLink').addEventListener('click', () => {
        authModal.style.display = 'block';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    // Open the modal for signup
    document.getElementById('signupLink').addEventListener('click', () => {
        authModal.style.display = 'block';
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    // Close modal
    document.querySelector('.close').onclick = function () {
        authModal.style.display = 'none';
    }

    // Show signup form
    showSignup.onclick = function (event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }

    // Show login form
    showLogin.onclick = function (event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    }

    // Handle login
    loginBtn.onclick = function () {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (username === 'user' && password === 'password') {
            isLoggedIn = true;
            updateUI();
            alert('Login successful!');
            authModal.style.display = 'none';
        } else {
            alert('Invalid credentials!');
        }
    }

    // Handle signup
    signupBtn.onclick = function () {
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        if (username && email && password) {
            isLoggedIn = true;
            updateUI();
            alert('Signup successful!');
            authModal.style.display = 'none';
        } else {
            alert('Please fill out all fields.');
        }
    }

    // Handle logout
    logoutBtn.onclick = function () {
        isLoggedIn = false;
        updateUI();
        alert('Logged out successfully!');
    }

    // Update UI based on login status
    function updateUI() {
        if (isLoggedIn) {
            authLinks.classList.add('hidden');
            userMenu.classList.remove('hidden');
            bookingSection.classList.remove('hidden');
        } else {
            authLinks.classList.remove('hidden');
            userMenu.classList.add('hidden');
            bookingSection.classList.add('hidden');
        }
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target === authModal) {
            authModal.style.display = 'none';
        }
    }

    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
