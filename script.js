function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
//this function clears the display
function clearDisplay() {
    document.getElementById('display').value = '';
}
//this function evaluates input
function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid expression!');
    }
}

// Keyboard input handling
document.addEventListener('keydown', function(event) {
    const key = event.key;

// Prevent default behavior for the Enter key
    if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (/[0-9+\-*\/=]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
