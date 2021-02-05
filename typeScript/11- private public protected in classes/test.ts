class Person {
  private name: string;
  protected age: number;
  public family: string;

  protected getAmount()
  {
      return 125000;
  }
}

class Employee extends Person
{
    age=10;

    public getsalary()
    {
        return this.getAmount();
    }
  
}


var p = new Person();
//p.name="iman";


p.family = "Madaeny";
var e = new Employee();
e.age

