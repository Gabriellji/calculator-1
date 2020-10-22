
const inputFirstNum = document.querySelector('#calculator-a');
const inputSecondNum = document.querySelector('#calculator-b');

const inputs = document.querySelectorAll('.input');

const sumBtn = document.querySelector('#sum_btn');
const productBtn = document.querySelector('#product_btn');

const clearBtn = document.querySelector('.clear');

const result = document.querySelector('.text_result');

const buttonsWrap = document.querySelector('#button_wrap');

const buttons = document.querySelectorAll('.get-result_btn');

const welcomeText = document.querySelector('.welcome');

const errorWrap = document.querySelector(".error");
const errorInnerWrap = document.querySelector(".typewriter");

setTimeout(() => {
  welcomeText.classList.add('scale-in-center');
  welcomeText.getElementsByClassName.display = 'flex';
  inputFirstNum.autofocus;
}, 2000);

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const substraction = (a, b) => a - b;
const divide = (a, b) => a / b;


const clear = (el) => {
  el.innerHTML = '';
}

const clearInputs = () => inputs.forEach((el) => {
  console.log(el.value);
  el.value = '';
});

const errorMsg = () => {
  alert('Heeey');
}

const validate = (str) => {
  const reg = /^\d+$/;
  return str.match(reg) ? str : false;
}

let start = 0;
let controlTimeOut;

const typeWriter = () => {
  const speedOFTyping = 90;
  const errorMessage = 'Oh! I can calculate only nubmers!';
  errorInnerWrap.innerHTML += errorMessage.charAt(start);
  start++;
  controlTimeOut = setTimeout(typeWriter, speedOFTyping);
  setTimeout(() => {
    clearTimeout(controlTimeOut);
    errorInnerWrap.innerHTML = 'Go for it!';
  }, 5000)
}

buttons.forEach((button) => {
  button.addEventListener('click', (element) => {
    start = 0;
    element.preventDefault();
    const firstValue = inputFirstNum.value;
    const secondValue = inputSecondNum.value;
    console.log(typeof firstValue);
    console.log(typeof secondValue);
    if (element.target.classList.contains('sum_result_btn')) {
      if(validate(firstValue) && validate(secondValue)) {
        const resOfSum = sum(Number(firstValue), Number(secondValue));
        result.innerHTML = resOfSum.toFixed(3); 
      } else {
        typeWriter();
        //clearInputs()
      }
      
    } else if (element.target.classList.contains('product_result_btn')) {
      if (validate(firstValue) && validate(secondValue)) {
        const resOfMultiply = multiply(Number(firstValue), Number(secondValue));
        result.innerHTML = resOfMultiply.toFixed(3);
      } else {
        typeWriter();
        clearInputs();
      }
      
    } else if (element.target.classList.contains('substraction_result_btn')){
      if (validate(firstValue) && validate(secondValue)) {
        const resOfSubtraction = substraction(Number(firstValue), Number(secondValue));
        result.innerHTML = resOfSubtraction.toFixed(3);
      } else {
        typeWriter();
        clearInputs()
      }
    } else if (element.target.classList.contains('divide_result_btn')) {
      if (validate(firstValue) && validate(secondValue)) {
        const resOfDivide = divide(Number(firstValue), Number(secondValue));
        result.innerHTML = resOfDivide.toFixed(3);
      } else {
        typeWriter();
        clearInputs()
      }
    } else {
      clear(result);
      clearInputs();
    }
  })
});
