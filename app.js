// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from "./utils.js";

const firstNumber = document.getElementById('first-number');

const secondNumber = document.getElementById('second-number');

const addButton = document.getElementById('add-button');

const answerSpace = document.getElementById('answer-space')


const firstNumberSubtract = document.getElementById('first-number-subtract');

const secondNumberSubtract = document.getElementById('second-number-subtract');

const subtractButton = document.getElementById('subtract-button');

const answerSpaceSubtract = document.getElementById('answer-space-subtract')


const firstNumberMultiply = document.getElementById('first-number-multiply');

const secondNumberMultiply = document.getElementById('second-number-multiply');
const multiplyButton = document.getElementById('multiply-button');

const answerSpaceMultiply = document.getElementById('answer-space-multiply')

const firstNumberDivide = document.getElementById('first-number-divide');

const secondNumberDivide = document.getElementById('second-number-divide');

const divideButton = document.getElementById('divide-button');

const answerSpaceDivide = document.getElementById('answer-space-divide')

addButton.addEventListener('click', () => {
  const result = addNumbers(Number(firstNumber.value), Number(secondNumber.value))
  answerSpace.textContent = result
})

subtractButton.addEventListener('click', () => {
  const resultSubtract = subtractNumbers(Number(firstNumberSubtract.value), Number(secondNumberSubtract.value))
  answerSpaceSubtract.textContent = resultSubtract
})

multiplyButton.addEventListener('click', () => {
  const resultMultiply = multiplyNumbers(Number(firstNumberMultiply.value), Number(secondNumberMultiply.value))
  answerSpaceMultiply.textContent = resultMultiply
})

divideButton.addEventListener('click', () => {
  const resultDivide = divideNumbers(Number(firstNumberDivide.value), Number(secondNumberDivide.value))
  answerSpaceDivide.textContent = resultDivide
})