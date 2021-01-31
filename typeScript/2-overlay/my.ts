// function sum(x: string, y: string): string {
//   return x + " " + y;
// }

// function sum(x: number, y: number): number {
//   return x + y;
// }

// var fullname = sum("iman", "madaeny");

function fullname(x: string, y:string, c:string):string
function fullname(x: string,y: string):string
{
  return x+" "+y;
}


function totalLength(x: string,y: string):number
function totalLength(x: any[], y: any[]): number
function totalLength(x: (string | any[]),y: (string| any[])):number{
  var total: number = x.length + y.length;

x.slice(0);

if(x instanceof Array)
{

}

if(x instanceof String)
{

}


  return total;
}

totalLength("Iman","Madaent");
totalLength(["Iman","Reza","Ali"],["Madaeny","Rezaei","Alizadeh"]);