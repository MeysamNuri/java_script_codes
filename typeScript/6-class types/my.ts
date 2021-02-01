class Person {
  constructor(name: string, family: string) {
    this.name = name;
    this.family = family;
  }

  name: string;
  family: string;

  FullName = function(): string {
    return this.name + " " + this.family;
  };
}

function Register(person: Person) {
  console.log(person.name + " " + person.family);
}

var iman = new Person("Iman", "Madaeny");
console.log(iman.FullName());

// iman.name="Iman";
// iman.family = "Madaeny";
Register(iman);



