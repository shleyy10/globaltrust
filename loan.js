document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const loanType = document.getElementById("loanType").value;
    const loanAmount = document.getElementById("loanAmount").value;
    const loanDuration = document.getElementById("loanDuration").value;
    const monthlyIncome = document.getElementById("monthlyIncome").value;
    const messageBox = document.getElementById("loanMessage");

    if (loanAmount === "" || loanDuration === "" || monthlyIncome === "") {
        messageBox.innerHTML = "<p style='color: red;'>All fields are required!</p>";
        return;
    }

    if (loanAmount > monthlyIncome * 10) {
        messageBox.innerHTML = "<p style='color: red;'>Loan request exceeds eligible amount!</p>";
        return;
    }

    // Simulate loan submission
    setTimeout(() => {
        messageBox.innerHTML = `<p style='color: green;'>Your ${loanType} loan application of $${loanAmount} has been submitted!</p>`;
        document.getElementById("loanForm").reset();
    }, 2000);
});
