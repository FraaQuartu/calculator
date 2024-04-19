const operate = function(operator, num1, num2) {
  switch(operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return 'Error';
  } 
}


let digit_keys = document.querySelectorAll(".digit");
let display = document.querySelector("#display");

// Faccio in modo di visualizzare i numeri che vengono digitati
digit_keys.forEach(key => {
  // If is clicked then display it
  key.addEventListener("click", (e) => {
    let digit = e.target.textContent;
    if (digit == '.') {
      // Se il separatore decimale è già nel display non aggiungere, altrimenti si
      if (!display.textContent.includes('.')) {
        display.textContent += digit;
      }
    }
    else {
      // Non voglio che i numeri inizino con 0
      if (display.textContent == '0') {
        display.textContent = digit;
      }
      else {
      display.textContent += digit;
      }
    }
  });
});