//

// class emp {

//     constructor(n)
//     {
//         this.name = n;

//         console.log("emp constructor called.....");
//     }
// }
// class manager extends emp {
//     constructor(d)
//     {
//         this.department = d;
//     }

// }

// let mng1 = new manager("ajit" , "project");   

// console.log(mng1);   //Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new manager

// 


class emp {

    constructor(n)
    {
        this.name = n;

        console.log("emp constructor called.....");
    }
}
class manager extends emp {
    constructor(n ,d)             // 
    {
        super(n);              // super fun^ call constructor argument
        this.department = d;
    }

}

let mng1 = new manager("ajit" , "project");   //  pass two argument

console.log(mng1); 