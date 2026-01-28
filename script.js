function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁';
    }
}

function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Please fill in both fields.');
        return false;
    }

    if (username === 'admin' && password === '1234') {
        alert('Login successful! (Demo)');
        // In real app, redirect: window.location.href = 'dashboard.html';
        return true;
    } else {
        alert('Invalid credentials. Demo: admin/1234');
        return false;
    }
}
