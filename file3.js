// Static Method => Ststic method not call by object, its call directly class. static method not connected to object  
// static property

class person 
{
    constructor(n, a)
    {
       this.name = n; 
       this.age = a; 
    }

    static pro = "sometime";


    static hello ()
    {
        console.log("hello");
    }
}
let person1 = new person( "Harshit", 28);

// person1.hello();                            //person1.hello is not a function
person.hello(); 

console.log(person.pro);

console.log(person1);