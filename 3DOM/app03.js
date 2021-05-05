//  DOM selector

// document.getElementByid()

console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);
 document.getElementById('task-title').style.background='#333';
 document.getElementById('task-title').style.color='#fff';
 document.getElementById('task-title').style.padding='5px';
 
document.getElementById('task-title').textContent='task list';
document.getElementById('task-title').innerText='mytask';
document.getElementById('task-title').innerHTML='<span><h1>innerhtml</h1></span>';

const taskTitle= document.getElementById('task-title');
taskTitle.style.margin='20px';


console.log(document.querySelector('#task-title'));

console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color='red';
document.querySelector('ul li').style.color='blue';
document.querySelector('li:last-child').style.color='red';
document.querySelector('li:nth-child(3)').style.color='yellow';
document.querySelector('li:nth-child(4)').textContent='hellow';
document.querySelector('li:nth-child(odd)').style.background='yellow';











