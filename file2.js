// class actual use define property and set values
// how to add method in class

class person 
{
    constructor(n, a)
    {
       this.name = n; 
       this.age = a; 
    }

    sayhi()                       // make method in class convert into prototype
    {
        console.log("hi....")
    }
}
let person1 = new person( "Harshit", 28);
person1.sayhi();                           // object name and call
console.log(person1);