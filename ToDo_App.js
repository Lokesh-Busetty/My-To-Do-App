let count=0
let max=0
let T_tasks=document.querySelector('.TotalTasks')
let ulElement=document.querySelector('.items')
const AddTask_B =document.getElementById('Add_task')
const RemoveTask_B =document.getElementById('Remove_task')
const padText=document.querySelector('.items')
function AddTask(){
    count++;
    max=count
    if(count===1){
        padText.style.padding="10px"
    }
    let task=window.prompt('Enter your Task :')
    let litem=document.createElement('li')
    litem.setAttribute('task-no',count)
    litem.innerHTML='Task Number : '+count+' '+task
    ulElement.appendChild(litem)
    T_tasks.innerHTML=count
    alert("Task Created Successfully...")
}
function RemoveTask(){
    if(count===0){
        alert("No Tasks Available..Keep Adding Tasks.")
        return
    }
    let dtask=parseInt(window.prompt('Enter Task Number :'),10)
    if(typeof(dtask)==='number' && dtask <= max){
        let deltask = ulElement.querySelector('[task-no="'+dtask+'"]')
        deltask.remove()
        alert("Task "+dtask+" Deleted Successfully")
        count--
        T_tasks.innerHTML=count   
    }
    else{
        alert("Invalid Task Number...Please Try again")
        return
    }
}
AddTask_B.addEventListener('click',AddTask)
RemoveTask_B.addEventListener('click',RemoveTask)