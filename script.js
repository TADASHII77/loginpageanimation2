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

    const loginButton = document.getElementById('login');

    loginButton.addEventListener("mouseover", function() {
        loginButton.style.backgroundColor = '#228b22';
    });

    loginButton.addEventListener("mouseout", function() {
        loginButton.style.backgroundColor = '#C0C0C0';
    });

    loginButton.addEventListener('click', function() {
        loginButton.style.backgroundColor = '#228b22';
        loginButton.style.color = '#fff';
        loginButton.textContent = '';

        const spinner = document.createElement('span');
        spinner.className = 'spinner';
        loginButton.appendChild(spinner);

        setTimeout(function() {
            loginButton.textContent = 'Login';
            loginButton.style.backgroundColor = '#C0C0C0';
            loginButton.style.color = '#000';

            const imgElements = document.getElementsByClassName('img');
            const logoElements = document.getElementsByClassName('logo');
            const inputElements = document.getElementsByClassName('input');
            const headlineElements = document.getElementsByClassName('headline');

            const addClassToElements = (elements, className) => {
                for (let i = 0; i < elements.length; i++) {
                    elements[i].classList.add(className);
                }
            };

            addClassToElements(imgElements, "reverseimg");
            addClassToElements(logoElements, "reverselogo");
            addClassToElements(inputElements, "reverseinput");
            addClassToElements(headlineElements, "reverseheadline");

        }, 1000);  // Adjust the delay for spinner display (1000ms = 1 second)
    });
});
