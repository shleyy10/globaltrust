document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Retrieve stored user data from localStorage
    let userData = JSON.parse(localStorage.getItem("user"));

    if (userData && userData.email === email && userData.password === password) {
        alert("Login successful! Redirecting to dashboard...");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
