function raceWithTimeout(promises,timeout)
{
const timeoutPromise=((_, reject)=>{
    setTimeout(()=>{
        reject(new Error('Timeout exceed'));
    },timeout);
});
return Promise.race([...promises,timeoutPromise]);
}

const promise1=new Promise((resolve)=>setTimeout(()=>resolve('promis 1 resolve'),2000));

const promise2=new Promise((resolve)=>setTimeout(()=>resolve('promis 2 resolve'),3000));

raceWithTimeout([promise1,promise2],2500)
    .then((result)=>console.log("resolved",result))
    .catch((error)=>console.error("rejected",error));

