const inputFirstNum = document.querySelector('#calculator-a');
const inputSecondNum = document.querySelector('#calculator-b');

const sumBtn = document.querySelector('#sum_btn');
const productBtn = document.querySelector('#product_btn');

const clearBtn = document.querySelector('.clear');

const result = document.querySelector('.text_result');

const buttonsWrap = document.querySelector('#button_wrap');

const buttons = document.querySelectorAll('.get-result_btn');

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

const clear = (el) => el.innerHTML = '';
// sumBtn.addEventListener('click', (e) => {
//   e.preventDefault()
// });

buttons.forEach((button) => {
  button.addEventListener('click', (element) => {
    //result.innerHTML = '';
    element.preventDefault();
    const firstValue = Number(inputFirstNum.value);
    const secondValue = Number(inputSecondNum.value);
    if (element.target.classList.contains('sum_result_btn')) {
      const resOfSum = sum(firstValue, secondValue);
      result.innerHTML = resOfSum; 
    } else if (element.target.classList.contains('product_result_btn')) {
      const resOfMultiply = multiply(firstValue, secondValue);
      result.innerHTML = resOfMultiply;
    } else {
      clear(result);
    }
  })
});

// const addButtonsClickHandler = () => {
//   buttonsWrap.addEventListener('click', (e) => {
//     if(e.target.classList.contains('get-result_btn')) {
//       let clickedTag = e.target;
//         removeSelectedTags();
//         selectClickedTag(clickedTag);
//     }
//   })
// }


// function multiply(a, b) {
//     return a * b;
//   };
  
//   function sum(a, b) {
//     return a + b;
//   };
  
  // const calculator4 = (callback, a, b) => {
  //   console.log(
  //     `The result is ${callback == sum ? (a+b) : (a*b)} Teiko refractoring`
  //   )
  // };
  
  /* remove this part when .getelementbyidis working
  calculator4(sum, 92, 27);
  calculator4(multiply, 56, 44);*/