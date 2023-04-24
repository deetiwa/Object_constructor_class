// mixin

let fmethod = {

    sayHi()
    {
        console.log("hi...");
    },
    saybye ()
    {
        console.log("bye...");
    }
}

class user 
{
    constructor()
    {
        this.name = "aman"
    }
}

class admin extends user {

}
{

}
Object.assign(user.prototype, fmethod);

let ur1 = new user ();

console.log(ur1.saybye());
