// print to console , my emulation of python XD,:)
const print = (any) => {
  console.log(any);
};

// selectors
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");
const currentOperator = document.querySelector("[data-operator-display]");
const clearBtn = document.querySelector("[data-clear-all]");
const delBtn = document.querySelector("[data-delete]");
const numberBtn = Array.from(document.querySelectorAll("[data-number]"));
const operatorBtn = Array.from(document.querySelectorAll("[data-operator]"));
const equalsTwoBtn = document.querySelector("[data-answer]");

// functional programming method would be updated to oop method
function test(e) {
  if (currentOperand.innerHTML.includes(".") && e.target.innerText === ".")
    return;
  else currentOperand.innerText = currentOperand.innerText + e.target.innerText;
}
function operation(e) {
  if (currentOperand.innerHTML === "" && previousOperand.innerHTML === "")
    return;
  else if (!currentOperand.innerHTML === "" && !previousOperand === "") {
    currentOperator.innerText = e.target.innerText;
    return;
  } else {
    currentOperator.innerText = e.target.innerText;
    previousOperand.innerText = currentOperand.innerText;
    currentOperand.innerText = "";
  }
}
function del() {
  currentOperand.innerHTML = currentOperand.innerHTML.toString().slice(0, -1);
}
function clearAll() {
  previousOperand.innerText = null;
  currentOperand.innerText = null;
  currentOperator.innerText = "";
}

numberBtn.forEach((items) => {
  items.addEventListener("click", test);
});
operatorBtn.forEach((button) => {
  button.addEventListener("click", operation);
});
clearBtn.addEventListener("click", clearAll);
delBtn.addEventListener("click", del);
