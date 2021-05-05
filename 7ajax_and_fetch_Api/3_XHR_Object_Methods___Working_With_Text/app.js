document.getElementById("button").addEventListener("click",
loadData);

function loadData(){
    // create am xhr object
    const xhr = new XMLHttpRequest();
       
    // open
    xhr.open("GET", 'dataa.txt', true);
    console.log("ready state ",xhr.readyState);//1 
    // optional - used for loaders
    xhr.onprogress=function(){
    console.log("ready state ",xhr.readyState);//3 
    } 
    xhr.onload=function(){
    console.log("ready state ",xhr.readyState);//4
        if(this.status===200){
        // console.log(this.responseText);
        document.getElementById("output").innerHTML=`<h3>${this.responseText}</h3>`
        }else{
            console.log('asdasdas');
        }
    } 
    // xhr.onreadystatechange = function (){
    //     console.log("ready state ",xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4 ){
    //         console.log(this.responseText);
    //     }
    // }
    xhr.onerror= function(){
    console.log("error...");
    }
    xhr.send();


    // readyState Values
    // 0 : request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready



// HTTP statuses
// 200: "ok"
// 403: "forbidden"
// 404: "not found"



}



