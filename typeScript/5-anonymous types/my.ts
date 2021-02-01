var todo : {name: string};
todo = {
  name: "Iman Madaeny"
}

console.log(todo);


function totalLength(x: {length: number},y: {length: number}):number{
  var total: number = x.length + y.length;
  return total;
}

var x ={
  length: 20
}
totalLength(x,x);

function Login(login: {username: string,password: string}):void{
  console.log(login.username);
  console.log(login.password);
  
}
var login = {username:"Iman Madaeny",password:"123456"};
Login(login);
