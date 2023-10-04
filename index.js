// Function expression called divide
function divide() {
    return 2000 / 100;
  }
  
  // Arrow function called square
  const square = (number) => {
    return number * number;
  };
  
  // Arrow function called add
  const add = (num1, num2) => {
    return num1 + num2;
  };
  
  // Export the functions if needed (e.g., for testing)
  module.exports = {
    divide,
    square,
    add,
  };
  