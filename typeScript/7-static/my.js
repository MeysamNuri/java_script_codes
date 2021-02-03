var Person = /** @class */ (function () {
    function Person(name, family) {
        this.FullName = function () {
            return this.name + " " + this.family;
        };
        this.name = name;
        this.family = family;
    }
    Person.getNextId = function () {
        this.lastId += 1;
    };
    Person.lastId = 1;
    return Person;
}());
function Register(person) {
    console.log(person.name + " " + person.family);
}
var person1 = new Person("Iman", "Madaeny");
console.log(person1.FullName());
console.log(Person.lastId);
Person.getNextId();
var person2 = new Person("Ali", "Rezaei");
console.log(person2.FullName());
console.log(Person.lastId);
Person.getNextId();
var person3 = new Person("Mina", "Alizadeh");
console.log(person3.FullName());
console.log(Person.lastId);
Person.getNextId();
