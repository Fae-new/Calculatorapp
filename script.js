const buttons=document.querySelectorAll('.btn-rows>p')


buttons.forEach(button => {
    button.addEventListener('click',()=>{
        document.getElementById('questiondiv').innerHTML+=button.innerHTML
    })
});


