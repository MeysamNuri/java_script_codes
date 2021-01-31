interface IPerson{
  name: string;
  family:string;
  age: number;
  email?: string;
}

function register(person: IPerson)
{
console.log(person.name+" "+person.family);

}

var iman: IPerson={
  name:"Iman",
  family:"Madaeny",
  age:30
}

register(iman);

interface IPersonService{
  add(person:IPerson):IPerson;
  delete(person:IPerson):void;
  getAll():IPerson[];
  getById(personId: number):IPerson;
}