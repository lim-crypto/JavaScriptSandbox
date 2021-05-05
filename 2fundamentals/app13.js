const color = 'red';
switch(color){
    case 'red':
        console.log('its red');
        break;
    case 'blue':
        console.log('its blue');    
        break;
    default:
        console.log('not red or blue');
        break;    

}


let day;
switch(new Date().getDay()){
    case 0 :
        day='Sunday';
        break;
    case 1 :
        day='Monday';
        break;
    case 2 :
        day='Tuesday';
        break;
    case 3:
        day='Wednesday';
        break;
    case 4 :
        day='Thursdat';
        break;
    case 5 :
        day='Friday';
        break;
    case 6 :
        day='Saturday';
        break;
    
}
console.log(`today is ${day}`);