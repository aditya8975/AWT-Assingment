 let proObj=new Promise((res,rej)=>{
    let a=5;
    if(a==5){
        res("Successful");
    }else{
        rej("failed");
    }
})
proObj.then((message)=>{
console.log("This is then block message: "+message);
})
proObj.catch((message)=>{
    console.log("This is catch block message: "+message);
})