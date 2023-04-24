
function creature (ls)
{
    this.lifespan = ls;
}

creature.prototype.breath = () =>
{
    console.log("breathing....")
}
 let creature1 =new creature(100);

console.log(creature1);


function person (fname,lname,a)
{
    this.firstname = fname;
    this.lastname = lname;
    this.age = a;
       
}

person.prototype.fullname = this.fullname = ()=> 
{ 
     console.log(this.firstname +" "+ this.lastname);
    }

person.prototype = Object.create(creature.prototype);

let person1 = new person ("ankit", "kumar", 20 );  // fullname method attached to person prototype
let person2 = new person ("ajeet", "kumar", 25);

console.log(person1);
console.log(person2.breath());

//Note => follow DRY method and inheritence
