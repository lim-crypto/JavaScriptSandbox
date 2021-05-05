var name1=document.getElementById('name1');
var name2=document.getElementById('name2');
var msg=document.getElementById("msg");
var val=document.getElementById("val");
function validate(){
    if(name1.value!=""&&name2.value!=""){
        val.innerHTML=name1.value+' '+name2.value;
        // msg.style="background-color:green;"
        // msg.innerHTML="success";
        if(name1.value==name2.value){
            //    msg.style="background-color:green;"
            //    msg.innerHTML="success";
            return true;
        }else{
            msg.style="background-color:red;";
            msg.innerHTML="should match";
            return false;
        }
    }else{
    msg.style="background-color:red;";
    msg.innerHTML="must not be empty";
    return false;
    }
}
