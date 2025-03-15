document.addEventListener("DOMContentLoaded", function() {
    const transactionData = [
        { date: "2025-03-10", description: "Deposit from Employer", type: "deposit", amount: 1200, status: "Success" },
        { date: "2025-03-12", description: "Electricity Bill Payment", type: "bill", amount: -50, status: "Success" },
        { date: "2025-03-13", description: "ATM Withdrawal", type: "withdrawal", amount: -200, status: "Success" },
        { date: "2025-03-14", description: "Money Transfer to John Doe", type: "transfer", amount: -500, status: "Failed" }
    ];

    function renderTransactions(filterType = "all", filterDate = "") {
        const tableBody = document.querySelector("#transactionTable tbody");
        tableBody.innerHTML = "";

        transactionData.forEach(transaction => {
            if (filterType !== "all" && transaction.type !== filterType) return;
            if (filterDate && transaction.date !== filterDate) return;

            let row = `<tr>
                <td>${transaction.date}</td>
                <td>${transaction.description}</td>
                <td>${transaction.type}</td>
                <td>${transaction.amount < 0 ? "-" : ""}$${Math.abs(transaction.amount)}</td>
                <td class="${transaction.status === "Success" ? "status-success" : "status-failed"}">${transaction.status}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }

    document.getElementById("applyFilter").addEventListener("click", function() {
        let filterType = document.getElementById("filter-type").value;
        let filterDate = document.getElementById("filter-date").value;
        renderTransactions(filterType, filterDate);
    });

    renderTransactions();
});
