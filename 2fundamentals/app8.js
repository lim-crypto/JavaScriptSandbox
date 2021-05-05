const name = 'john';
const age = 30;
const job = 'web develeper';
const city= 'miami';
let html;

// html = '<ul><li>Name: '+name+'</li> <li> Age: '+age+'</li><li>Job: '+job+'</li><li>City: '+city+'</li> </ul>';

// html = '<ul>'+
// '<li>Name: '+name+'</li>'+
//  '<li> Age: '+age+'</li>'+
//  '<li>Job: '+job+'</li>'+
//  '<li>City: '+city+'</li> '+
//  '</ul>';
function hello(){
    return 'hello';
}
html =`
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2+2}</li>
<li>${hello()}</li>
<li>${age>30?'over 30':'under 30'}</li>
</ul>
`;
// document.write(html);
document.body.innerHTML=html;






