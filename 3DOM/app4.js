const li = document.createElement('li');

li.className='collection-item';
li.id='new-item';
li.setAttribute('title','new item');

li.appendChild(document.createTextNode('helloworld'));

const link=document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML='<i class="fa fas-remove"></i>';

li.appendChild(link);

document.querySelector('ul.collection').appendChild(li);







console.log(li);