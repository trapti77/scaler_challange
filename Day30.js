function throttle(func,interval){
    let lastinvocation=0;
    return function(...arg){
        const  now=Date.now();
        if(now-lastinvocation>=interval){
            lastinvocation=now;
            func.apply(this,arg);
        }
        else{
            console.log("functtion is not invoked"); 
        }
    }
}
const throttlefunc=throttle(function(){
    console.log("functtion invoked");
},1000);
throttlefunc();
throttlefunc();
setTimeout(()=>throttlefunc(),1500);