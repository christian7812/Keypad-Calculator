const display = document.getElementById("display");
const button = document.querySelectorAll("button");

let currentNumber = "";
let firstNumber = null;
let operator = null;
let shouldReset = false;

button.forEach(btn=> {
    btn.addEventListener("click", () => {
        const result = btn.textContent;

        //Delete Button
        if(btn.classList.contains("Del")) {
            currentNumber = currentNumber.slice(0,-1);
            display.value = currentNumber;
        }
        //Clear Button
        else if(btn.classList.contains("eraseAll")) {
            currentNumber ="";
            operator = null;
            firstNumber = null;
            display.value = "";
        }
        //Equal Button
        else if(btn.classList.contains("equal")) {
            if(!firstNumber !== null && operator && currentNumber !== "") {
                const output = operate(firstNumber, parseFloat(currentNumber), operator);
                display.value = output;
                firstNumber = output;
                operator = null;
                shouldReset = true;
            }
        }
        //Operator Button
        else if(["+","-","*","/"].includes(result)) {
            if(currentNumber !== "") {
             firstNumber = parseFloat(currentNumber);
            } else if(operator) {
            firstNumber = operate(firstNumber,parseFloat(currentNumber),operator);
            display.value = firstNumber;
            }
            operator = result;
            currentNumber = "";
        }
        //ShouldReset If It's Not the above Options
        else{
            if(shouldReset) {
                currentNumber ="";
                display.value = "";
                shouldReset = false;
            }
            currentNumber += result;
            display.value = currentNumber;
        }

        function operate(a,b,op) {
            switch(op) {
                case"+": return a + b;
                case"-": return a- b;
                case"*": return a * b;
                case"/": return b !== 0 ? a / b : "Syntax Error";
                default: return b;
            }
        }
          
    })
})

   //Reset Calculator
       function resetCalculator() {
        currentNumber= "";
        operator = null;
        firstNumber = null;
        shouldReset = false;
       } 