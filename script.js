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
let operationFinished = false;


document.getElementById('theme1').addEventListener('click',()=>{
  changeTheme('theme1.css')
})
document.getElementById('theme2').addEventListener('click',()=>{
  changeTheme('theme2.css')
})
document.getElementById('theme3').addEventListener('click',()=>{
  changeTheme('theme3.css')
})


const changeTheme = id => document.getElementById('cssfile').href=id

const typing = event => answerScreen.innerHTML += event.target.innerHTML


buttons.forEach(button => button.addEventListener('click', typing));


const useOperator = () => {

  questionScreen.innerHTML = answerScreen.innerHTML
  answerScreen.innerHTML = ''
  firstValue = questionScreen.innerHTML.slice(0, -1)
  operation = questionScreen.innerHTML.slice(-1)

  return (firstValue, operation)

}



const reset = () => {

  answerScreen.innerHTML = ''
  questionScreen.innerHTML = ''
  operationFinished = false
}

deleteBtn.addEventListener('click', () => {
  if (operationFinished === true) {
    reset()

  } else {
    answerScreen.innerHTML = answerScreen.innerHTML.slice(0, -1)
  }

})

addBtn.addEventListener('click', useOperator)
subtractBtn.addEventListener('click', useOperator)
multiplyBtn.addEventListener('click', useOperator)
divideBtn.addEventListener('click', useOperator)
resetBtn.addEventListener('click', reset)



const calculate = () => {
  if (operationFinished == true) {
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
Equaltobtn.addEventListener('click', calculate)