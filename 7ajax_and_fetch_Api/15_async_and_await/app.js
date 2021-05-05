async function myfunc(){  
    const promise= new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('hello', 5000));
    });

    const error= true // fabricated error
    if(!error){
        const res = await promise ;
        return res;
    }else{
        await Promise.reject(new Error('Something went Wrong'));
    }
    
}

 myfunc()
 .then(res=> console.log(res))
 .catch(err=>console.log(err));