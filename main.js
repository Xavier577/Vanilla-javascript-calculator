// print to console , my emulation of python XD,:)
const print = (any) => {
  console.log(any);
};
class calculator {
  constructor(previousOperand, currentOperand, operator) {
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.operator = operator;
  }
  append(number) {
    if (this.currentOperand.innerText.includes(".") && number.includes("."))
      return;
    this.currentOperand.innerText += number;
  }
  delete() {
    this.currentOperand.innerText = this.currentOperand.innerText.slice(0, -1);
  }
  clear() {
    this.previousOperand.innerText = "";
    this.currentOperand.innerText = "";
    this.operator.innerText = "";
  }
  displayCurrentOperator(operator) {
    if (this.previousOperand.innerText === "") {
      this.previousOperand.innerText = this.currentOperand.innerText;
      this.currentOperand.innerText = "";
    }
    if (this.previousOperand.innerText != "") {
      this.operator.innerText = operator;
      if (this.currentOperand.innerText != "") {
        switch (operator) {
          case "÷":
            this.previousOperand.innerText /= this.currentOperand.innerText;
            this.currentOperand.innerText = "";
            break;
          case "×":
            this.previousOperand.innerText *= this.currentOperand.innerText;
            this.currentOperand.innerText = "";
            break;
          case "-":
            this.previousOperand.innerText -= this.currentOperand.innerText;
            this.currentOperand.innerText = "";
            break;
          case "+":
            if (
              parseInt(this.currentOperand.innerText) != NaN &&
              parseInt(this.previousOperand.innerText) != NaN
            ) {
              this.previousOperand.innerText =
                parseInt(this.previousOperand.innerText) +
                parseInt(this.currentOperand.innerText);
              this.currentOperand.innerText = "";
            } else if (
              parseFloat(this.currentOperand.innerText) != NAN &&
              parseFloat(this.previousOperand.innerText) != NAN
            ) {
              this.previousOperand.innerText =
                parseFloat(this.previousOperand.innerText) +
                parseFloat(this.currentOperand.innerText);
              this.currentOperand.innerText = "";
            }
            break;
        }
      }
    }
    return;
  }
  computeAndUpdateDisplay() {
    switch (this.operator.innerText) {
      case "÷":
        this.currentOperand.innerText =
          this.previousOperand.innerText / this.currentOperand.innerText;

        this.previousOperand.innerText = "";
        this.operator.innerText = "";
        break;
      case "×":
        this.currentOperand.innerText =
          this.previousOperand.innerText * this.currentOperand.innerText;

        this.previousOperand.innerText = "";
        this.operator.innerText = "";
        break;
      case "+":
        if (
          parseInt(this.currentOperand.innerText) != NaN &&
          parseInt(this.previousOperand.innerText) != NaN
        ) {
          this.currentOperand.innerText =
            parseInt(this.previousOperand.innerText) +
            parseInt(this.currentOperand.innerText);
          this.previousOperand.innerText = "";
          this.operator.innerText = "";
        } else if (
          parseFloat(this.currentOperand.innerText) != NAN &&
          parseFloat(this.previousOperand.innerText) != NAN
        ) {
          this.currentOperand.innerText =
            parseFloat(this.previousOperand.innerText) +
            parseFloat(this.currentOperand.innerText);
          this.previousOperand.innerText = "";
          this.operator.innerText = "";
        }
        break;
      case "-":
        this.currentOperand.innerText =
          this.previousOperand.innerText - this.currentOperand.innerText;

        this.previousOperand.innerText = "";
        this.operator.innerText = "";
        break;
    }
  }
}

// selectors
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");
const currentOperator = document.querySelector("[data-operator-display]");
const clearBtn = document.querySelector("[data-clear-all]");
const delBtn = document.querySelector("[data-delete]");
const numberBtn = Array.from(document.querySelectorAll("[data-number]"));
const operatorBtn = Array.from(document.querySelectorAll("[data-operator]"));
const equalsTwoBtn = document.querySelector("[data-answer]");

const Calculator = new calculator(
  previousOperand,
  currentOperand,
  currentOperator
);

numberBtn.forEach((number) =>
  number.addEventListener("click", () => {
    Calculator.append(number.innerText);
  })
);
delBtn.addEventListener("click", (digit) => Calculator.delete());
clearBtn.addEventListener("click", (values) => Calculator.clear());
operatorBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    Calculator.displayCurrentOperator(btn.innerText);
  })
);
equalsTwoBtn.addEventListener("click", () => {
  Calculator.computeAndUpdateDisplay();
});
