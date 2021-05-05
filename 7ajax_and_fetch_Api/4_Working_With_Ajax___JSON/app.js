document.getElementById("button").addEventListener("click",
loadCustomer);
document.getElementById("button2").addEventListener("click",
loadCustomer2);
// single customer
function loadCustomer(){
    // create am xhr object
    const xhr = new XMLHttpRequest();
    // open
    xhr.open("GET", 'customer.json', true);

    xhr.onload=function(){ 
        if(this.status===200){
        console.log(this.responseText);
            const customer = JSON.parse(this.responseText);

            const output =`
                <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
                </ul>    
            `;
            document.getElementById("output").innerHTML=output
        }
    }
  
    xhr.send();
 


}

// many customer
function loadCustomer2(){
    // create am xhr object
    const xhr = new XMLHttpRequest();
    // open
    xhr.open("GET", 'customers.json', true);

    xhr.onload=function(){ 
        if(this.status===200){
        console.log(this.responseText);
            const customers = JSON.parse(this.responseText);
            let output=""
            customers.forEach(function(customer){
                output +=`
                <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
                </ul>    
            `;
            }) 
            document.getElementById("output2").innerHTML=output
        }
    }
  
    xhr.send();
 


}



