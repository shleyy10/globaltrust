document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Store user data in localStorage
    let user = { fullName, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! Redirecting to login...");
    window.location.href = "login.html";
});
