function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("除數不能為0");
        return null;
    }
    return a / b;
}

function calculate() {
    var num1Input = document.getElementById("num1").value;
    var num2Input = document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;
    var resultDisplay = document.getElementById("result");

    if (num1Input === "" || num2Input === "") {
        alert("Please enter both numbers.");
        return;
    }

    var n1 = parseFloat(num1Input);
    var n2 = parseFloat(num2Input);
    var finalResult = 0;

    if (operator === "+") {
        finalResult = add(n1, n2);
    } else if (operator === "-") {
        finalResult = subtract(n1, n2);
    } else if (operator === "*") {
        finalResult = multiply(n1, n2);
    } else if (operator === "/") {
        finalResult = divide(n1, n2);
        if (finalResult === null) return;
    }

    resultDisplay.innerHTML = "Result = " + finalResult.toFixed(2);
}