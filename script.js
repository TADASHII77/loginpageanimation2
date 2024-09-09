document.addEventListener("DOMContentLoaded", function() {
    const enrollButton = document.getElementById("enrollButton");
    const tooltip = document.getElementById("tooltip");

    enrollButton.addEventListener("mouseover", function() {
        tooltip.style.display = "block";
    });

    enrollButton.addEventListener("mouseout", function() {
        tooltip.style.display = "none";
    });

    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", function() {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        this.textContent = type === "password" ? "Show" : "Hide";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');

    loginButton.addEventListener('click', function() {
        loginButton.style.backgroundColor = '#228b22';
        loginButton.style.color = '#fff';
        loginButton.textContent = '';

        const spinner = document.createElement('span');
        spinner.className = 'spinner';
        loginButton.appendChild(spinner);

        setTimeout(function() {
            loginButton.style.backgroundColor = '#C0C0C0';
            loginButton.style.color = '#000';
            loginButton.textContent = 'Login';
            loginButton.removeChild(spinner);
        }, 3000);
    });
});
