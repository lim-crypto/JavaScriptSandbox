const clearBtn= document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// clearBtn.addEventListener('click',runEvent);
// clearBtn.addEventListener('dblclick',runEvent);
// clearBtn.addEventListener('mousedown',runEvent);
// clearBtn.addEventListener('mouseup',runEvent);
// clearBtn.addEventListener('mouseenter',runEvent);
// card.addEventListener('mouseenter',runEvent);
// card.addEventListener('mouseleave',runEvent);
// card.addEventListener('mouseover',runEvent);
// card.addEventListener('mouseout',runEvent);
card.addEventListener('mousemove',runEvent);

// event handler
function runEvent(e){
    console.log(`Event type: ${e.type}`);
    heading.innerHTML=`mouseX: ${e.offsetX} mouseY: ${e.offsetY}  `;
    document.body.style.background=`rgb( ${e.offsetX} , ${e.offsetY} , 40 ) `;
}









