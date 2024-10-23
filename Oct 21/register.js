const submitBtn = document.getElementById('submit');
const loginBtn = document.getElementById('login');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');

loginBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
    } else {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Account created successfully!');
        window.location.href = 'login.html';
    }
});
