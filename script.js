// print to console , my emulation of python XD,:)
const print = (any) => console.log(any);

class calculator {
  constructor(
    previousOperandTextElement,
    currentOperandTextElement,
    operatorTextElement
  ) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.operatorTextElement = operatorTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operator = "";
    this.updateDisplay();
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    this.updateDisplay();
  }
  append(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand + number;
  }
  getOperandFormat(operand) {
    const stringNumber = operand.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }
  compute() {
    let initial = parseFloat(this.previousOperand);
    let final = parseFloat(this.currentOperand);
    let result;
    switch (this.operator) {
      case "÷":
        result = final / initial;
        break;
      case "×":
        result = final * initial;
        break;
      case "+":
        result = final + initial;
        break;
      case "-":
        result = final - initial;
        break;
    }
    return result;
  }
  renderOutput() {
    if (this.previousOperand === "" && this.operator == "") return;
    else if (this.currentOperand === "") return;
    this.currentOperand = this.compute();
    this.previousOperand = "";
    this.operator = "";
    this.updateDisplay();
  }

  retrieveOperator(operator) {
    if (this.currentOperand === "" && this.previousOperand === "") return;
    else if (this.previousOperand != "" && this.currentOperand === "") {
      this.operator = operator;
      this.currentOperand = "";
    } else if (this.previousOperand != "" && this.currentOperand != "") {
      this.previousOperand = this.compute();
      this.operator = operator;
      this.currentOperand = "";
    } else {
      this.previousOperand = this.currentOperand;
      this.operator = operator;
      this.currentOperand = "";
    }
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getOperandFormat(
      this.currentOperand
    );
    this.previousOperandTextElement.innerText = this.getOperandFormat(
      this.previousOperand
    );
    this.operatorTextElement.innerText = this.operator;
  }
}

// selectors
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
const operatorTextElement = document.querySelector("[data-operator-display]");
const clearBtn = document.querySelector("[data-clear-all]");
const delBtn = document.querySelector("[data-delete]");
const numberBtn = Array.from(document.querySelectorAll("[data-number]"));
const operatorBtn = Array.from(document.querySelectorAll("[data-operator]"));
const equalsTwoBtn = document.querySelector("[data-answer]");

const Calculator = new calculator(
  previousOperandTextElement,
  currentOperandTextElement,
  operatorTextElement
);

numberBtn.forEach((number) =>
  number.addEventListener("click", () => {
    Calculator.append(number.innerText);
    Calculator.updateDisplay();
  })
);
operatorBtn.forEach((button) =>
  button.addEventListener("click", () => {
    Calculator.retrieveOperator(button.innerText);
    Calculator.updateDisplay();
  })
);
equalsTwoBtn.addEventListener("click", () => Calculator.renderOutput());
delBtn.addEventListener("click", (digits) => Calculator.delete());
clearBtn.addEventListener("click", (button) => Calculator.clear());
