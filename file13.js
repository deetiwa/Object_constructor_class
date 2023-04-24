let a = new Date().getDate()+24*60*60*1000;
let x = setInterval(function ()
{
    let now = new Date().getDate();
    let timeLeft = a - now;

    const day = Math.floor(timeLeft/1000*60*60*24);
    const hours  = Math.floor(timeLeft/1000*60*60)%24;
    const minutes = Math.floor(timeLeft/1000*60)%60;
    const seconds = Math.floor(timeLeft/1000)%60;

    console.log(day +"D" ,hours +"Hr" ,minutes+"m" ,seconds+"s");
    if (timeLeft<0)
    {
        clearInterval(x);
    }
    else
    {
        console.log("Countdoun finished");
    }
},1000

);
