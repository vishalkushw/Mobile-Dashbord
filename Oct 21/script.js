const submitBtn = document.getElementById('submit');
const registerBtn = document.getElementById('register');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

registerBtn.addEventListener('click', () => {
    window.location.href = 'ragister.html';
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert(`Login successful, welcome ${username}!`);
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Incorrect Password or Username';
    }
});