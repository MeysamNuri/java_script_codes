class Person {

  static lastId: number = 1;


  constructor(name: string, family: string) {
    this.name = name;
    this.family = family;
  }

  name: string;
  family: string;

  FullName = function(): string {
    return this.name + " " + this.family;
  };

  static getNextId()
  {
    this.lastId+=1;
  }
}

function Register(person: Person) {
  console.log(person.name + " " + person.family);
}

var person1 = new Person("Iman", "Madaeny");
console.log(person1.FullName());
console.log(Person.lastId);
Person.getNextId();

var person2 = new Person("Ali","Rezaei");
console.log(person2.FullName());
console.log(Person.lastId);
Person.getNextId();

var person3 = new Person("Mina","Alizadeh");
console.log(person3.FullName());
console.log(Person.lastId);
Person.getNextId();





