var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 2] = "Male";
    Gender[Gender["Female"] = 5] = "Female";
})(Gender || (Gender = {}));
function register(person) {
    console.log(person.name + " " + person.family);
}
var iman = {
    name: "Iman",
    family: "Madaeny",
    age: 30,
    gender: Gender.Male
};
register(iman);
var Days;
(function (Days) {
    Days[Days["shanbe"] = 1] = "shanbe";
    Days[Days["yek"] = 2] = "yek";
    Days[Days["do"] = 3] = "do";
    Days[Days["seshanbe"] = 45] = "seshanbe";
})(Days || (Days = {}));
console.log(Days[45]);
var Colors;
(function (Colors) {
    Colors["Red"] = "#43344";
    Colors["Green"] = "#334422";
    Colors["Yellow"] = "#F012554";
})(Colors || (Colors = {}));
console.log(Colors.Red);
function SayHello(type) {
    if (type == Gender.Male) {
        console.log("Hello Male");
    }
    else {
        console.log("Hello Female");
    }
}
console.log(SayHello(Gender.Female));
