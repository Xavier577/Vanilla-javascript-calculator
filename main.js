// Selectors
const calcDisplay = document.querySelector('.calc-display');
const numBtnList = document.querySelectorAll('.btn-numList');
const numBtns = document.querySelector('.num-btn')
// operator keys selectors
const delBtn = document.querySelector('#delete-btn');
const clrBtn = document.querySelector('#clear-btn');
const addBtn = document.querySelector('#add-btn');
const minusBtn = document.querySelector('#minus-btn');
const divideBtn = document.querySelector('#divide-btn');
const multipyBtn = document.querySelector('#multipy-btn');
const equalsBtn = document.querySelector('#equals2-btn')


// functions
const testing = () => {
    console.log('hello')
}



// EventListners 
delBtn.addEventListener('click', testing);
