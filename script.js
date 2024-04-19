const operate = function(operator, num1, num2) {
  switch(operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      if(num2 == 0){
        return 'Error';
      }
      else {
        return num1 / num2;
      }
    default:
      return 'Error';
  } 
}


let digit_keys = document.querySelectorAll(".digit");
let display = document.querySelector("#display");
let last_op_pressed = null;

// Faccio in modo di visualizzare i numeri che vengono digitati
digit_keys.forEach(key => {
  key.addEventListener("click", (e) => {
    let digit = e.target.textContent;
    if(last_op_pressed == '=') {
      last_op_pressed = null;
      display.textContent = '0';
      e.target.click();
    }
    else if (digit == '.') {
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
        // Devo aggiungere una cifra a sx (ma solo se c'è spazio)
        if(display.textContent.length < 10) {
          display.textContent += digit;
        }
      }
    }
  });
});

let operator_keys = document.querySelectorAll(".operator");
let operator = null, num1 = null, num2 = null;

// Svolgi le operazioni
operator_keys.forEach(key => {
  let op = key.textContent;
  if (op != '='){
    key.addEventListener("click", (e) =>{
      document.querySelector(".operator.eq").click();
      op = e.target.textContent;  
      last_op_pressed = op;
      num1 = parseFloat(display.textContent);
      operator = op;
      display.textContent = '0';
    })
  }
  else {
    key.addEventListener("click", () => {
      // Cosa fare se ho schiacciato uguale
      if (num1 != null && operator != null){
        num2 = parseFloat(display.textContent)
        let result = operate(operator, num1, num2);
        if(String(result).length >= 10)
          result = result.toExponential(5);
        display.textContent = result;
        num1 = parseFloat(display.textContent);
        num2 = null;
        operator = null;
        last_op_pressed = '=';
      }
    });
  }
});

// Implemento i modifier
let ac_key = document.querySelector(".modifier.ac");
ac_key.addEventListener("click", () => {
  num1 = null;
  num2 = null;
  operator = null;
  display.textContent = '0';
});

let pm_key = document.querySelector(".modifier.pm");
pm_key.addEventListener("click", () => {
  display.textContent = -parseFloat(display.textContent);
});

let perc_key = document.querySelector(".modifier.perc");
perc_key.addEventListener("click", () => {
  display.textContent = parseFloat(display.textContent) / 100;
  if(display.textContent.length >= 10)
    display.textContent = parseFloat(display.textContent).toExponential(5);
})


