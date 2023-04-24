class Person
 {                                     //define two private fields #firstName and #lastName in the Person class.
    #firstName;
    #lastName;
    constructor(firstName, lastName)
     {
      this.#firstName = firstName;
      this.#lastName = lastName;
    }
    getFullName(format = true)
     {
      return format ? this.#firstLast() : this.#lastFirst();
      
    }
  
    #firstLast() {
      return (`${this.#firstName} ${this.#lastName}`);
    }
    #lastFirst() {
      return (`${this.#lastName}, ${this.#firstName}`);
    }
  }
  



  let person = new Person('Deepak', 'Tiwari');

  console.log(person.getFullName());