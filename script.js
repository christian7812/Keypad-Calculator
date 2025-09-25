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
            if(firstNumber !== null && operator && currentNumber !== "") {
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


//Mobile Phone
const displayInput = document.getElementById("displayInput");
const buttons = document.querySelectorAll(".btn");

let currentNum = "";
let firstNum = null;
let operators = null;
let shouldResets = false;

buttons.forEach(button=> {
    button.addEventListener("click", () => {
        const outcome = button.textContent;

        //Delete Button
        if(button.classList.contains("Delete")) {
            currentNum = currentNum.slice(0,-1);
            displayInput.value = currentNum;
        }
        //Clear Button
        else if(button.classList.contains("clearAll")) {
            currentNum ="";
            operators = null;
            firstNum = null;
            displayInput.value = "";
        }
        //Equal Button
        else if(button.classList.contains("equalTo")) {
            if(firstNum !== null && operators && currentNum !== "") {
                const output = operation(firstNum, parseFloat(currentNum), operators);
                displayInput.value = output;
                firstNum = output;
                operators = null;
                shouldResets = true;
            }
        }
        //Operator Button
        else if(["+","-","*","/"].includes(outcome)) {
            if(currentNum !== "") {
             firstNum = parseFloat(currentNum);
            } else if(operators) {
            firstNum = operation(firstNum,parseFloat(currentNum),operators);
            displayInput.value = firstNum;
            }
            operators = outcome;
            currentNum = "";
        }
        //ShouldReset If It's Not the above Options
        else{
            if(shouldResets) {
                currentNum ="";
                displayInput.value = "";
                shouldResets = false;
            }
            currentNum += outcome;
            displayInput.value = currentNum;
        }

        function operation(a,b,op) {
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
