function nextStep(step) {
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('step' + step).classList.add('active');

    if (step >= 2) {
        updateEMI();
    }

    if (step === 5) {
        showSummary();
    }
}

function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value) || 0;
    const loanTenure = parseInt(document.getElementById('loanTenure').value) || 0;
    const interestRate = 8.5; 
    const monthlyInterestRate = (interestRate / 12) / 100;
    const numberOfMonths = loanTenure * 12;

    if (loanAmount > 0 && loanTenure > 0) {
        const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
                    (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
        return emi.toFixed(2);
    }
    return "N/A";
}

function updateEMI() {
    const emiDisplay = document.getElementById('emiDisplay');
    if (emiDisplay) {
        emiDisplay.innerHTML = `Estimated EMI: ₹${calculateEMI()}`;
    }
}

function showSummary() {
    const summaryList = document.getElementById('summaryList');
    const emiAmount = calculateEMI();
    
    summaryList.innerHTML = `
        <li><strong>Full Name:</strong> ${document.getElementById('fullName').value}</li>
        <li><strong>Date of Birth:</strong> ${document.getElementById('dob').value}</li>
        <li><strong>Loan Amount:</strong> ₹${document.getElementById('loanAmount').value}</li>
        <li><strong>Loan Tenure:</strong> ${document.getElementById('loanTenure').value} years</li>
        <li><strong>Annual Income:</strong> ₹${document.getElementById('income').value}</li>
        <li><strong>Estimated EMI (Per Month):</strong> ₹${emiAmount}</li>
    `;
}

function submitForm() {
    alert('Your car loan application has been submitted successfully!');
}
