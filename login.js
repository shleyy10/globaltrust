document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Retrieve user data from localStorage
        let storedUser = localStorage.getItem("user");

        if (storedUser) {
            storedUser = JSON.parse(storedUser);

            // Check if credentials match
            if (email === storedUser.email && password === storedUser.password) {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "dashboard.html"; // Redirect to dashboard
            } else {
                alert("Invalid email or password. Try again!");
            }
        } else {
            alert("No account found. Please sign up first.");
        }
    });

    // Redirect users who are not logged in
    if (window.location.pathname.includes("dashboard.html")) {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            window.location.href = "login.html"; 
        }
    }
});
