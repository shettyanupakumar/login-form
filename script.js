document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.getElementById("form-container");

    if (!formContainer) {
        console.error("Element with ID 'form-container' not found.");
        return;
    }

    // Create form elements
    const form = document.createElement("form");
    form.id = "login-form";

    const heading = document.createElement("h1");
    heading.textContent = "Login";
    form.appendChild(heading);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.setAttribute("for", "email");
    form.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.placeholder = "Enter your email";
    emailInput.required = true;
    form.appendChild(emailInput);

    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password:";
    passwordLabel.setAttribute("for", "password");
    form.appendChild(passwordLabel);

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.placeholder = "Enter your password";
    passwordInput.required = true;
    form.appendChild(passwordInput);

    const loginButton = document.createElement("button");
    loginButton.type = "submit";
    loginButton.textContent = "Login";
    form.appendChild(loginButton);

    // Append form to container
    formContainer.appendChild(form);

    // Add event listener for form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        alert(`Email: ${email}\nPassword: ${password}`);
    });

    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
