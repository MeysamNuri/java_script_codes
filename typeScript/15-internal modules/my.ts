function clone<T>(value: T):T
{
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}
 clone<number>(123);
 clone<string>('iman');

 var todo:Todo ={
     id:1,
     name:"Pick Up",
     state:TodoState.Active
 }

 clone<Todo>(todo);
 clone({name:'Iman'});


 var array: number[] = [1,2,3];
 var array2:Array<number> = [5,6,7];



 let pair1=new KeyValuePair<number,string>(1,'first');
 let pair2=new KeyValuePair<string,Date>('second',new Date(Date.now()));
 let pair3 = new KeyValuePair<number,string>(3,'Third');




 var printer = new KeyValuePairPrinter([pair1,pair3]);
 printer.print();

interface IHaveALength{
    length: number;
}

 function totalLength<T extends IHaveALength>(x:T,y:T)
 {
     var total : number = x.length + y.length;
     return total;
 }

 var length = totalLength('Joe','Iman');

