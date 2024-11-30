function clock()
{
    var date=new Date();
    var hours=date.getHours();
    var minuts=date.getMinutes();
    var seconds=date.getSeconds();
    console.log(hours+":"+minuts+":"+seconds);
}
setInterval(clock,1000);