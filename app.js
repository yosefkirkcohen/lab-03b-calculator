// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const addNumbers = (num1, num2) => {
  return num1 + num2;
}

const firstNumber = document.getElementById('first-number');

const secondNumber = document.getElementById('second-number');

const addButton = document.getElementById('add-button');

const answerSpace = document.getElementById('answer-space')


addButton.addEventListener('click', () => {
  const result = addNumbers(Number(firstNumber.value), Number(secondNumber.value))
  answerSpace.textContent = result
  
})

