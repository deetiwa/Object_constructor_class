class emp {

    constructor(n)
    {
        this.name = n;

        console.log("emp constructor called.....");
    }
    msg()
    {
        console.log("HI...");
    }
}
class manager extends emp {
    constructor(p ,d)             
    {
        super(p);              
        this.department = d;
    }
            info()

             {
                super.msg();
            
    {
        console.log(this.name + "is manager of department "+ this.department)
    }

}
}
let mng1 = new manager("ajit" , "project");   

console.log(mng1.info());

console.log(mng1); 