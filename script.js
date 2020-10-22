
const INPUT_FIRST = document.querySelector('#calculator-a');
const INPUT_SECOND = document.querySelector('#calculator-b');
const INPUTS = document.querySelectorAll('.input');
const RESULT = document.querySelector('.text_result');
const BUTTONS = document.querySelectorAll('.get-result_btn');
const WELCOME_TEXT = document.querySelector('.welcome');
const ERROR_WRAP = document.querySelector(".typewriter");

setTimeout(() => {
  WELCOME_TEXT.classList.add('scale-in-center');
  WELCOME_TEXT.style.display = 'flex';
  INPUT_FIRST.autofocus;
}, 2000);

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const substraction = (a, b) => a - b;
const divide = (a, b) => a / b;

const clearText = (el) => {
  el.innerHTML = '';
}

const clearInputs = () => INPUTS.forEach((el) => {
  el.value = '';
});

const validate = (str) => {
  const reg = /^\d+$/;
  return str.match(reg) ? str : false;
}

let start = 0;
let controlTimeOut;

const typeWriter = () => {
  const speedOFTyping = 90;
  const errorMessage = ' Oh! I can calculate only nubmers... <3';
  ERROR_WRAP.innerHTML += errorMessage.charAt(start);
  start++;
  controlTimeOut = setTimeout(typeWriter, speedOFTyping);
  setTimeout(() => {
    clearTimeout(controlTimeOut);
    ERROR_WRAP.innerHTML = 'Go for it!';
  }, 5000)
}

BUTTONS.forEach((button) => {
  button.addEventListener('click', (element) => {
    start = 0;
    element.preventDefault();
    const firstValue = INPUT_FIRST.value;
    const secondValue = INPUT_SECOND.value;
    if (element.target.classList.contains('sum_result_btn')) {
      if(validate(firstValue) && validate(secondValue)) {
        const sumResult = sum(Number(firstValue), Number(secondValue));
        RESULT.innerHTML = sumResult.toFixed(2); 
      } else {
        typeWriter();
        clearInputs()
      }
      
    } else if (element.target.classList.contains('product_result_btn')) {
      if (validate(firstValue) && validate(secondValue)) {
        const multiplyResult = multiply(Number(firstValue), Number(secondValue));
        RESULT.innerHTML = multiplyResult.toFixed(2);
      } else {
        typeWriter();
        clearInputs();
      }
      
    } else if (element.target.classList.contains('substraction_result_btn')){
      if (validate(firstValue) && validate(secondValue)) {
        const subtractionResult = substraction(Number(firstValue), Number(secondValue));
        RESULT.innerHTML = subtractionResult.toFixed(2);
      } else {
        typeWriter();
        clearInputs()
      }
    } else if (element.target.classList.contains('divide_result_btn')) {
      if (validate(firstValue) && validate(secondValue)) {
        const devideResult = divide(Number(firstValue), Number(secondValue));
        RESULT.innerHTML = devideResult.toFixed(2);
      } else {
        typeWriter();
        clearInputs()
      }
    } else {
      clearText(RESULT);
      clearInputs();
    }
  })
});
