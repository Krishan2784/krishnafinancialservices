// SIP Calculator with Chart
function calculateSIP() {
  let amount = parseFloat(document.getElementById("sipAmount").value);
  let rate = parseFloat(document.getElementById("sipRate").value) / 100 / 12;
  let years = parseInt(document.getElementById("sipYears").value);
  let months = years * 12;

  let futureValue = amount * (((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate));
  document.getElementById("sipResult").innerText = "Future Value: ₹" + futureValue.toFixed(2);

  let invested = amount * months;
  let gain = futureValue - invested;

  new Chart(document.getElementById("sipChart"), {
    type: 'doughnut',
    data: {
      labels: ['Invested', 'Returns'],
      datasets: [{
        data: [invested, gain],
        backgroundColor: ['#007bff', '#28a745']
      }]
    }
  });
}

// EMI Calculator with Chart
function calculateEMI() {
  let principal = parseFloat(document.getElementById("loanAmount").value);
  let annualRate = parseFloat(document.getElementById("loanRate").value) / 100;
  let years = parseInt(document.getElementById("loanYears").value);

  let monthlyRate = annualRate / 12;
  let months = years * 12;

  let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
            (Math.pow(1 + monthlyRate, months) - 1);

  document.getElementById("emiResult").innerText = "Monthly EMI: ₹" + emi.toFixed(2);

  let totalPayment = emi * months;
  let interest = totalPayment - principal;

  new Chart(document.getElementById("emiChart"), {
    type: 'doughnut',
    data: {
      labels: ['Principal', 'Interest'],
      datasets: [{
        data: [principal, interest],
        backgroundColor: ['#007bff', '#dc3545']
      }]
    }
  });
}
