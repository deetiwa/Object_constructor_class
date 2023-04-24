// Public and private

// class user 
// {
//     constructor (n)
//     {
//         this.name =n;
//     }
//     getname()
//     {
//         console.log(this.name);
//     }
// }
// let emp = new user ("rajat");

// console.log(emp.name);

// console.log(emp.#name);    // Private field '#name' must be declared in an enclosing class


class user 
{
    #name = "";
    constructor (n)
    {
        this.#name =n;
    }
    getname()
    {
        console.log(this.#name);
    }
}
let emp = new user ("rajat");

console.log(emp.getname());