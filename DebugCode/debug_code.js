function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
// Perform the operation
                let result = arithmetic(num1, num2);

                // Display the result
                displayResult(result);
            } else {
                displayResult('Please enter valid numbers');
            }
        }
        
function arithmetic(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    const result = [];
    
    result.push(a * b);
    result.push(parseFloat(a / b).toFixed(2));
    result.push(a + b);

    return result

    // Multiply the numbers
    
}



function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    const resultElement2 = document.getElementById('result2')
    const resultElement3 = document.getElementById('result3');

    resultElement.textContent = `The product is: ${result[0]}`;
    resultElement2.textContent = `The quotient is: ${result[1]}`;
    resultElement3.textContent = `The sum is: ${result[2]}`;
}