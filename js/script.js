// Calculator values
let calculator1Value = 8000;
let calculator2Value = 8000;
let calculator1Mode = 'subtract'; // 'subtract' or 'add'
let calculator2Mode = 'subtract'; // 'subtract' or 'add'

// Initialize image click functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.content img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Check if this is the Reuratauri image
            if (this.alt === 'Reuratauri' || this.src.includes('reuratauri')) {
                // Reset all images to colored (remove greyed class from all)
                images.forEach(image => {
                    image.classList.remove('greyed');
                });
            } else {
                // Normal toggle behavior for other images
                this.classList.toggle('greyed');
            }
        });
    });
});

// Function to toggle between subtract and add mode
function toggleMode(calculatorId) {
    if (calculatorId === 1) {
        calculator1Mode = calculator1Mode === 'subtract' ? 'add' : 'subtract';
        document.getElementById('toggle1').textContent = calculator1Mode === 'subtract' ? '-' : '+';
        updateButtonText(1);
    } else if (calculatorId === 2) {
        calculator2Mode = calculator2Mode === 'subtract' ? 'add' : 'subtract';
        document.getElementById('toggle2').textContent = calculator2Mode === 'subtract' ? '-' : '+';
        updateButtonText(2);
    }
}

// Function to update button text based on mode
function updateButtonText(calculatorId) {
    const mode = calculatorId === 1 ? calculator1Mode : calculator2Mode;
    const prefix = mode === 'subtract' ? '-' : '+';
    
    document.getElementById(`btn${calculatorId}-1000`).textContent = `${prefix}1000`;
    document.getElementById(`btn${calculatorId}-100`).textContent = `${prefix}100`;
    document.getElementById(`btn${calculatorId}-50`).textContent = `${prefix}50`;
}

// Unified calculate function that handles both add and subtract
function calculate(calculatorId, amount) {
    const mode = calculatorId === 1 ? calculator1Mode : calculator2Mode;
    
    if (calculatorId === 1) {
        if (mode === 'subtract') {
            calculator1Value -= amount;
            if (calculator1Value < 0) calculator1Value = 0;
        } else {
            calculator1Value += amount;
        }
        document.getElementById('display1').textContent = calculator1Value;
    } else if (calculatorId === 2) {
        if (mode === 'subtract') {
            calculator2Value -= amount;
            if (calculator2Value < 0) calculator2Value = 0;
        } else {
            calculator2Value += amount;
        }
        document.getElementById('display2').textContent = calculator2Value;
    }
}

// Function to subtract a value from a specific calculator (kept for compatibility)
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
