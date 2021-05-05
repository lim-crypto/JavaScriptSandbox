const data = [
        {
            name: 'john doe',
            age: 32,
            gender:'male',
            lookingfor : 'female',
            location: 'Boston MA',
            image: 'https://randomuser.me/api/portraits/men/41.jpg'
        },
        {
            name: 'john smith',
            age: 24,
            gender:'male',
            lookingfor : 'female',
            location: 'Boston MA',
            image: 'https://randomuser.me/api/portraits/men/82.jpg'
        },        {
            name: 'jane doe',
            age:31,
            gender:'female',
            lookingfor : 'male',
            location: 'Boston MA',
            image: 'https://randomuser.me/api/portraits/women/42.jpg'
        }


];

const profiles = profileIterator(data);

nextProfile();

//next event
document.getElementById('next').addEventListener('click', nextProfile);


// next profile display
function nextProfile(){
    const currentProfile = profiles.next().value;
    if( currentProfile!==undefined ){


    document.getElementById('profileDisplay').innerHTML = `
    <ul class = "list-group">
        <li class= "list-group-item"> Name:${currentProfile.name} </li>
        <li class= "list-group-item"> Age:${currentProfile.age} </li>
        <li class= "list-group-item"> Location:${currentProfile.location} </li>
        <li class= "list-group-item"> Preference:${currentProfile.gender} </li>
        <li class= "list-group-item">looking for:${currentProfile.lookingfor} </li> 
    </ul>
    `; 
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}" >`
}else{
    window.location.reload();
}
}
function profileIterator(profiles){
    let nextIndex = 0;

    return{
        next:function(){
         return nextIndex< profiles.length ?
          { value: profiles[nextIndex++], done:false }  :
          { done: true}   
        }
    };
}



















//