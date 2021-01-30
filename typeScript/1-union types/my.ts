function totalLength(x: string | any[], y: string | any[]): number {
  var totla: number = x.length + y.length;

  x.slice(0);

  if (x instanceof Array) {
    x.push("Iman Madaeny");
  }

  if (x instanceof String) {
    x.substr(0);
  }

  return totla;
}

var total = totalLength("Iman", "Madaeny");

let lname = "Iman";
{
  let lname = "Ali";
  console.log(lname);
}

console.log(lname);
