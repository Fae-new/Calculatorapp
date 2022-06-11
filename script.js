const buttons=document.querySelectorAll('.btn-rows>p')
const deleteBtn=document.getElementById('del')
const addBtn=document.getElementById('add')
const multiplyBtn=document.getElementById('multiply')
const divideBtn=document.getElementById('divide')
const subtractBtn=document.getElementById('subtract')
const answerScreen=  document.getElementById('answerdiv')
const questionScreen=  document.getElementById('questiondiv')
const Equaltobtn=document.getElementById('equalto')
const resetBtn= document.getElementById('reset')



let operationFinished=false
let firstValue=''
let operation=''
let secondValue=''


buttons.forEach(button => {
    button.addEventListener('click',()=>{
     answerScreen .innerHTML+=button.innerHTML
    })
});


const useOperator = ()=> {

        questionScreen.innerHTML=answerScreen.innerHTML
        answerScreen.innerHTML=''
        firstValue=questionScreen.innerHTML.slice(0,-1)
        operation=questionScreen.innerHTML.slice(-1)
      
    return (firstValue,operation)
    
    
}

const reset=()=>{
answerScreen.innerHTML=''
questionScreen.innerHTML=''
operationFinished=false

}

deleteBtn.addEventListener('click',()=>{
    if(operationFinished===false){

document.getElementById('questiondiv').innerHTML=document.getElementById('questiondiv').innerHTML.slice(0,-1)}
else{reset()}
})

addBtn.addEventListener('click',useOperator)
subtractBtn.addEventListener('click',useOperator)
multiplyBtn.addEventListener('click',useOperator)
divideBtn.addEventListener('click',useOperator)
resetBtn.addEventListener('click',reset)
Equaltobtn.addEventListener('click',()=>{

secondValue=answerScreen.innerHTML
switch (operation) {
    case '+':
      computation = Number(firstValue) + Number(secondValue)
      break
    case '-':
      computation = Number(firstValue) - Number(secondValue)
      break
    case '*':
      computation = Number(firstValue)* Number(secondValue)
      break
    case '/':
      computation = Number(firstValue) / Number(secondValue)
      break
    default:
      return
  }
  questionScreen.innerHTML+=secondValue
  answerScreen.innerHTML=computation
  operationFinished=true

})








