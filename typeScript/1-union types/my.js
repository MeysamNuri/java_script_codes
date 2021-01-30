function totalLength(x, y) {
    var totla = x.length + y.length;
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
var lname = "Iman";
{
    var lname_1 = "Ali";
    console.log(lname_1);
}
console.log(lname);
