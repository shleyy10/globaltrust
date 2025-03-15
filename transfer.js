document.getElementById("transferForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Fetch values
    let recipient = document.getElementById("recipient").value;
    let amount = document.getElementById("amount").value;
    let message = document.getElementById("message").value || "No message provided";

    // Update summary
    document.getElementById("summary-recipient").textContent = recipient;
    document.getElementById("summary-amount").textContent = amount;
    document.getElementById("summary-message").textContent = message;

    // Show summary section
    document.getElementById("summary").classList.remove("hidden");
});

// Confirm Transfer
document.getElementById("confirmTransfer").addEventListener("click", function() {
    document.getElementById("summary").classList.add("hidden");
    document.getElementById("otp-section").classList.remove("hidden");
});

// Verify OTP (Mock)
document.getElementById("verifyOtp").addEventListener("click", function() {
    let otp = document.getElementById("otp-code").value;
    
    if (otp === "1234") { // Mock OTP
        alert("Transfer Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid OTP. Please try again.");
    }
});
