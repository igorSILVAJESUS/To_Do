const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput= document.querySelector("#taskInput")


function createSpan(taskInputValue){
    const span = document.createElement('span');
    span.textContent = taskInputValue;
    span.addEventListener("click",function(){
        span.classList.toggle('completed');
    })
    return span;
}

function createDeletebutton(li){
    const button = document.createElement('button');
    button.textContent = 'Excluir'
    button.addEventListener('click', function(){
        li.remove(); 
    })
    return button;
}


function addTask(){
     const li = document.createElement('li');
     const taskInputValue = taskInput.value;
     const span = createSpan(taskInputValue);
     const button = createDeletebutton(li);
     if (taskInputValue == ''){
        return
     }
    li.appendChild(span)
    li.appendChild(button)

    taskList.appendChild(li);
}    

taskBtn.addEventListener("click",addTask)
