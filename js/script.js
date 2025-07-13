// Calculator values
let calculator1Value = 8000;
let calculator2Value = 8000;

// Initialize image click functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.content img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            this.classList.toggle('greyed');
        });
    });
});

// Function to subtract a value from a specific calculator
function subtract(calculatorId, amount) {
    if (calculatorId === 1) {
        calculator1Value -= amount;
        if (calculator1Value < 0) calculator1Value = 0;
        document.getElementById('display1').textContent = calculator1Value;
    } else if (calculatorId === 2) {
        calculator2Value -= amount;
        if (calculator2Value < 0) calculator2Value = 0;
        document.getElementById('display2').textContent = calculator2Value;
    }
}

// Function to divide a calculator value by 2
function divide(calculatorId) {
    if (calculatorId === 1) {
        calculator1Value = Math.ceil(calculator1Value / 2);
        document.getElementById('display1').textContent = calculator1Value;
    } else if (calculatorId === 2) {
        calculator2Value = Math.ceil(calculator2Value / 2);
        document.getElementById('display2').textContent = calculator2Value;
    }
}

// Function to reset both calculators to 8000
function resetBoth() {
    calculator1Value = 8000;
    calculator2Value = 8000;
    document.getElementById('display1').textContent = calculator1Value;
    document.getElementById('display2').textContent = calculator2Value;
}
