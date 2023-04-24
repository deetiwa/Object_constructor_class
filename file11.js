
class Person 
{ 
    constructor(name)
     {
        this.name = name;
        this.occupation = "unemployed";
    }
    
    greet() 
    {
        console.log(`Hello ${this.name}.`);
    }
 
}
class Student extends Person {

    constructor(name) 
    {
        super(name);
        
        this.occupation = 'Student';  // Overriding an occupation property
    }
    
    
    greet() 
    {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}

let p = new Student('Jack');
p.greet();