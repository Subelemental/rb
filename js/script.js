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

// Timer functionality
let timerMinutes = 45;
let timerSeconds = 0;
let timerInterval = null;
let isTimerRunning = false;

// Function to format time as MM:SS
function formatTime(minutes, seconds) {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to update timer display
function updateTimerDisplay() {
    document.getElementById('timerDisplay').textContent = formatTime(timerMinutes, timerSeconds);
}

// Function to start/stop timer
function toggleTimer() {
    if (isTimerRunning) {
        // Stop timer
        clearInterval(timerInterval);
        isTimerRunning = false;
        document.getElementById('startStopBtn').textContent = 'Start';
    } else {
        // Start timer
        isTimerRunning = true;
        document.getElementById('startStopBtn').textContent = 'Pause';
        
        timerInterval = setInterval(function() {
            if (timerSeconds > 0) {
                timerSeconds--;
            } else if (timerMinutes > 0) {
                timerMinutes--;
                timerSeconds = 59;
            } else {
                // Timer reached 00:00
                clearInterval(timerInterval);
                isTimerRunning = false;
                document.getElementById('startStopBtn').textContent = 'Start';
                alert('Time\'s up!');
            }
            updateTimerDisplay();
        }, 1000);
    }
}

// Function to reset timer
function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerMinutes = 45;
    timerSeconds = 0;
    updateTimerDisplay();
    document.getElementById('startStopBtn').textContent = 'Start';
}
