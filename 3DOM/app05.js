// traversing the DOM


let val;

const list =document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
val=list;
val=listItem;
//get child node
val=list.childNodes;
//get children element nodes
val=list.children;



console.log(val);