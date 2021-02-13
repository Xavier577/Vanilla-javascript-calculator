// print to console , my emulation of python XD
const print = (any) => {
  console.log(any);
};

// selectors
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");
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
function clearAll() {
  previousOperand.innerText = null;
  currentOperand.innerText = null;
}
function del() {
  currentOperand.innerHTML = currentOperand.innerHTML.toString().slice(0, -1);
}

numberBtn.forEach((items) => {
  items.addEventListener("click", test);
});
clearBtn.addEventListener("click", clearAll);
delBtn.addEventListener("click", del);
