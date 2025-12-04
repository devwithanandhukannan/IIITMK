let display = document.getElementById("disp-res");
display.innerHTML = "0";

let firstValue = "";
let operator = "";
let secondValue = "";

function displayResult(val) {
    if (display.innerHTML === "0") {
        display.innerHTML = val;
    } else {
        display.innerHTML += val;
    }
}

function clicked(val) {
    if (!operator) {
        firstValue += val;
    } else {
        secondValue += val;
    }
    displayResult(val);
}

function cleardisplay() {
    display.innerHTML = "0";
    firstValue = "";
    operator = "";
    secondValue = "";
}

function clickedOper(op) {
    if (op === "=") {
        calculate();
        return;
    }

    if (operator && secondValue) {
        calculate();
        firstValue = display.innerHTML;
        secondValue = "";
    }

    operator = op;
    displayResult(op);
}

function calculate() {
    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(secondValue);
    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "÷":
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.innerHTML = result;
    firstValue = result.toString();
    operator = "";
    secondValue = "";
}
