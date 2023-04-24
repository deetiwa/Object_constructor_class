let person1 = {};

console.log(person1);

let person2 = { name : "Ankit" };

console.log(person2);

console.log(person2.hasOwnProperty('name')); // JS already define prototype and property 

function person (n)
{
    this.name = n;
}

let person3 = new person("Ajet");
console.log(person3);