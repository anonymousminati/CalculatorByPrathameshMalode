// Get the input/output field
const inputOutputField = document.querySelector('.inputOutputField');

// Get all the calculator buttons
const buttons = document.querySelectorAll('.button');
const equalsButton = document.querySelector('.equalsButton');
const clearButton = document.querySelector('.button:last-child');

// Add event listeners to all the calculator buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    
    if (value === 'C') {
      // Clear the input/output field
      inputOutputField.value = '';
    } else if (value === '⌫') {
      // Remove the last character from the input/output field
      inputOutputField.value = inputOutputField.value.slice(0, -1);
    } else {
      // Append the button value to the input/output field
      inputOutputField.value += value;
    }
  });
});

// Add event listener to the equals button
equalsButton.addEventListener('click', () => {
  try {
    // Evaluate the expression in the input field
    const result = eval(inputOutputField.value);
    inputOutputField.value = result;
  } catch (error) {
    // Handle any errors that occur during evaluation
    inputOutputField.value = 'Error';
    console.log(error);
  }
});

// Add event listener to the clear button
clearButton.addEventListener('click', () => {
  // Clear the input/output field
  inputOutputField.value = '';
});
