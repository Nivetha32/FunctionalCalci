document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;

            if (value === 'C') {
                display.value = '';
                currentInput = '';
                operator = '';
                previousInput = '';
            } else if (value === '=') {
                if (currentInput && previousInput) {
                    display.value = calculate(previousInput, operator, currentInput);
                    previousInput = display.value;
                    currentInput = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    if (previousInput) {
                        previousInput = calculate(previousInput, operator, currentInput);
                    } else {
                        previousInput = currentInput;
                    }
                    operator = value;
                    currentInput = '';
                    display.value = previousInput + ' ' + operator + ' ';
                }
            } else {
                currentInput += value;
                display.value = previousInput + ' ' + operator + ' ' + currentInput;
            }
        });
    });

    function calculate(a, op, b) {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        switch (op) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
            case '/': return num1 / num2;
            default: return b;
        }
    }
});

     
