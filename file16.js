// property(getter)
const student = {


    firstName: 'Rohit',
    
    
    get getName() {                  // get method
        return this.firstName;
    }
};
console.log(student.firstName); 


console.log(student.getName); 


//console.log(student.getName()); // error student.getName is not a function

// property(setter)

const stu = {
    firstName: 'Harshit',
    
    
    set changeName(newName)                // set method
    {
        this.firstName = newName;
    }
};

console.log(stu.firstName);

stu.changeName = 'Sanjay';

console.log(stu.firstName); 