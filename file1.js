// Closures => We can create nested function in javascript.

// function createUser (name)
// {
//     let greeting = 'hi'
//     function greet()
//     {
//         return greeting  + name +  'is created';
//     }
//     return greet
// }
// let welcome = createUser ('john');
// console.log (welcome());
// welcome();

// other example

let count = 0;
function increment ()
{
    
    console.log(count++);
    
}

increment ();
increment();
count = 5;
increment ();

// Note=> we have a function which  wants to preserve avalue over many call - its a time for closures