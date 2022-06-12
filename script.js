//declaring and assigning variables

const buttons = document.querySelectorAll('.btn-rows>p');
const deleteBtn = document.getElementById('del');
const addBtn = document.getElementById('add');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const subtractBtn = document.getElementById('subtract');
const answerScreen = document.getElementById('answerdiv');
const questionScreen = document.getElementById('questiondiv');
const Equaltobtn = document.getElementById('equalto');
const resetBtn = document.getElementById('reset');
const numberButtons = document.querySelectorAll('.numbers')
let operationFinished = false;

//functions

const changeTheme = id => document.getElementById('cssfile').href = id

const typing = event => answerScreen.innerHTML += event.target.innerHTML

const useOperator = () => {
  operationFinished = false
  questionScreen.innerHTML = answerScreen.innerHTML
  answerScreen.innerHTML = ''
  firstValue = questionScreen.innerHTML.slice(0, -1)
  operation = questionScreen.innerHTML.slice(-1)
  console.log(operationFinished);
  return (firstValue, operation)

}

const reset = () => {

  answerScreen.innerHTML = ''
  questionScreen.innerHTML = ''
  operationFinished = false
}

const calculate = () => {
  if (operationFinished === true) {
    reset()
  } else {
    secondValue = answerScreen.innerHTML
    switch (operation) {
      case '+':
        computation = Number(firstValue) + Number(secondValue)
        break
      case '-':
        computation = Number(firstValue) - Number(secondValue)
        break
      case 'x':
        computation = Number(firstValue) * Number(secondValue)
        break
      case '/':
        computation = Number(firstValue) / Number(secondValue)
        break
      default:
        return
    }
    questionScreen.innerHTML += secondValue
    answerScreen.innerHTML = computation
    operationFinished = true
  }
}


//adding event listeners


deleteBtn.addEventListener('click', () => {
  if (operationFinished === true) {
    reset()

  } else {
    answerScreen.innerHTML = answerScreen.innerHTML.slice(0, -1)
  }

})

document.getElementById('theme1').addEventListener('click', () => {
  changeTheme('theme1.css')
})
document.getElementById('theme2').addEventListener('click', () => {
  changeTheme('theme2.css')
})
document.getElementById('theme3').addEventListener('click', () => {
  changeTheme('theme3.css')
})

buttons.forEach(button => button.addEventListener('click', typing));
addBtn.addEventListener('click', useOperator)
subtractBtn.addEventListener('click', useOperator)
multiplyBtn.addEventListener('click', useOperator)
divideBtn.addEventListener('click', useOperator)
resetBtn.addEventListener('click', reset)
Equaltobtn.addEventListener('click', calculate)