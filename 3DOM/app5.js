const newHeading = document.createElement('h2');

newHeading.id='task-title';
newHeading.appendChild(document.createTextNode('task list'));
const oldHeading = document.getElementById('task-title');
const cardAction =document.querySelector('.card-action');
cardAction.replaceChild(newHeading, oldHeading);
const lis = document.querySelectorAll('li');
const list= document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[3]);

const firstLi = document.querySelector('li:first-child');
const link=firstLi.children[0];
// console.log(firstLi.children[0]);
let val  ;
val =link.className;
val = link . classList;
val=link.classList[0];
link.classList.add('test');
link.classList.remove('test');



val=link;
val=link.getAttribute('href');
val=link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'google'); 
val=link.hasAttribute('title');
val=link.removeAttribute('title');
val=link;


console.log(val);
