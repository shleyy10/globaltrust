document.getElementById("requestCardBtn").addEventListener("click", function() {
    const messageBox = document.getElementById("cardMessage");

    // Simulate request processing
    setTimeout(() => {
        messageBox.innerHTML = `<p style='color: green;'>Your new credit card request has been submitted!</p>`;
    }, 2000);
});
