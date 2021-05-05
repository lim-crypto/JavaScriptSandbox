const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
    //dom load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //clear task
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks
    filter.addEventListener('keyup', filterTasks);
}

//get tasks from local storge
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        //create li element
        const li = document.createElement('li');
        li.className = 'collection-item';
        //create textnode and append 
        li.appendChild(document.createTextNode(task));
        // create new link
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class ="fa fa-remove"></i>';
        li.appendChild(link);

        taskList.appendChild(li);
    })
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('add a task');
    }else{
        
    //create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    //create textnode and append 
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class ="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);

    //store in local storage
    storeTaskInLocalStorage(taskInput.value);


    taskInput.value = '';
    // console.log(li);

    }
    e.preventDefault();
}
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        // console.log(e.target);
        if (confirm('are you sure?')) {
            e.target.parentElement.parentElement.remove();
            // remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}
//remove from ls
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
function clearTasks() {
    // taskList.innerHTML='';
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    //clear from ls
    clearTasksFromLocalStorage();

}
function clearTasksFromLocalStorage() {
    localStorage.clear();
}
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach
        (function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });



}

