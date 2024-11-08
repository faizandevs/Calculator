// Initialize variables for operands, operator, and calculation
let firstOperand = null;
let secondOperand = null;
let operator = null;
let currentInput = '';

// Get the display element to show the result
const display = document.querySelector('.text');

// Function to update the display
function updateDisplay(value) {
    display.textContent = value;
}

// Function to handle number button clicks
function handleNumberClick(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Function to handle operator button clicks
function handleOperatorClick(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentInput !== '') {
        secondOperand = parseFloat(currentInput);
        firstOperand = calculate(firstOperand, secondOperand, operator);
        updateDisplay(firstOperand);
    }
    operator = op;
    currentInput = '';
}

// Function to perform the calculation
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error';
            }
            return num1 / num2;
        default:
            return num1;
    }
}

// Function to handle equal button click
function handleEqualsClick() {
    if (firstOperand !== null && operator !== null && currentInput !== '') {
        secondOperand = parseFloat(currentInput);
        const result = calculate(firstOperand, secondOperand, operator);
        updateDisplay(result);
        firstOperand = result;
        operator = null;
        currentInput = '';
    }
}

// Function to handle clear button click
function handleClearClick() {
    firstOperand = null;
    secondOperand = null;
    operator = null;
    currentInput = '';
    updateDisplay('0');
}

// Function to handle decimal point click
function handleDecimalClick() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

// Add event listeners to the buttons
document.getElementById('C').addEventListener('click', handleClearClick);
document.getElementById('+').addEventListener('click', () => handleOperatorClick('+'));
document.getElementById('-').addEventListener('click', () => handleOperatorClick('-'));
document.getElementById('*').addEventListener('click', () => handleOperatorClick('*'));
document.getElementById('/').addEventListener('click', () => handleOperatorClick('/'));
document.getElementById('=').addEventListener('click', handleEqualsClick);
document.getElementById('0').addEventListener('click', () => handleNumberClick('0'));
document.getElementById('1').addEventListener('click', () => handleNumberClick('1'));
document.getElementById('2').addEventListener('click', () => handleNumberClick('2'));
document.getElementById('3').addEventListener('click', () => handleNumberClick('3'));
document.getElementById('4').addEventListener('click', () => handleNumberClick('4'));
document.getElementById('5').addEventListener('click', () => handleNumberClick('5'));
document.getElementById('6').addEventListener('click', () => handleNumberClick('6'));
document.getElementById('7').addEventListener('click', () => handleNumberClick('7'));
document.getElementById('8').addEventListener('click', () => handleNumberClick('8'));
document.getElementById('9').addEventListener('click', () => handleNumberClick('9'));
document.getElementById('00').addEventListener('click', () => handleNumberClick('00'));
document.getElementById('.').addEventListener('click', handleDecimalClick);
