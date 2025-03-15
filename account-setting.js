document.getElementById("settingsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const messageBox = document.getElementById("settingsMessage");

    if (fullName === "" || email === "" || phone === "") {
        messageBox.innerHTML = "<p style='color: red;'>All fields are required!</p>";
        return;
    }

    // Simulate saving data
    setTimeout(() => {
        messageBox.innerHTML = "<p style='color: green;'>Account details updated successfully!</p>";
        document.getElementById("settingsForm").reset();
    }, 2000);
});
