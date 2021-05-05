// DOM selector for multiple elements


// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].getElementsByClassName.color='red';
// items[3].textContent='hello';
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);




// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color='red';
// lis[3].textContent='hello';

// lis=Array.from(lis);

// lis.reverse();
// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent=`${index}: hello`;
// })
// console.log(lis);




const items = document.querySelectorAll(' ul.collection li.collection-item');

items.forEach(function(item){
    item.textContent='hello';
});
console.log(items);

const liOdd= c=document.querySelectorAll('li:nth-child(odd)');
const liEven= c=document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background='#ccc';
});

for(let i =0 ; i<liEven.length; i++){
    liEven[i].style.background='#f4f4f4';
}














