document.getElementById("billForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Fetch values
    let billType = document.getElementById("bill-type").value;
    let accountNumber = document.getElementById("account-number").value;
    let amount = document.getElementById("amount").value;

    // Update summary
    document.getElementById("summary-bill").textContent = billType;
    document.getElementById("summary-account").textContent = accountNumber;
    document.getElementById("summary-amount").textContent = amount;

    // Show summary section
    document.getElementById("bill-summary").classList.remove("hidden");
});

// Confirm Payment
document.getElementById("confirmPayment").addEventListener("click", function() {
    document.getElementById("bill-summary").classList.add("hidden");
    document.getElementById("otp-section").classList.remove("hidden");
});

// Verify OTP (Mock)
document.getElementById("verifyOtp").addEventListener("click", function() {
    let otp = document.getElementById("otp-code").value;
    
    if (otp === "1234") { // Mock OTP
        alert("Payment Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid OTP. Please try again.");
    }
});
